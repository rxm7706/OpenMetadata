/*
 *  Copyright 2021 Collate
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *  http://www.apache.org/licenses/LICENSE-2.0
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

import { isNil } from 'lodash';
import { FormErrorData } from 'Models';
import React, { useRef, useState } from 'react';
import Select, { MultiValue } from 'react-select';
import { Role } from '../../../generated/entity/teams/role';
import { errorMsg, getEntityName } from '../../../utils/CommonUtils';
import { Button } from '../../buttons/Button/Button';
import { reactSingleSelectCustomStyle } from '../../common/react-select-component/reactSelectCustomStyle';
type FormData = Pick<Role, 'name' | 'displayName' | 'description' | 'policies'>;
interface AddRoleModalProp {
  onCancel: () => void;
  onChange?: (data: FormData) => void;
  onSave: (data: FormData) => void;
  form: React.ElementType;
  header: string;
  initialData: FormData;
  errorData?: FormErrorData;
}
interface Option {
  label: string;
  value: string;
}

type FormRef = {
  fetchMarkDownData: () => string;
};

const AddRoleModal = ({
  onCancel,
  onChange,
  onSave,
  form: Form,
  header,
  initialData,
  errorData,
}: AddRoleModalProp) => {
  const formRef = useRef<FormRef>();
  const [data, setData] = useState<FormData>(initialData);
  const [selectedPolicies, setSelectedPolicies] = useState<Array<Option>>([]);

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSave({
      ...data,
      description: formRef?.current?.fetchMarkDownData() || '',
      policies: selectedPolicies.map((policy) => ({
        id: policy.value,
        type: 'policy',
      })),
    });
  };

  const handleOnChange = (
    value: MultiValue<unknown>,
    { action }: { action: string }
  ) => {
    if (isNil(value) || action === 'clear') {
      setSelectedPolicies([]);
    } else {
      setSelectedPolicies(value as Option[]);
    }
  };

  return (
    <dialog className="tw-modal" data-testid="modal-container">
      <div className="tw-modal-backdrop" onClick={() => onCancel()} />
      <div className="tw-modal-container tw-overflow-y-auto tw-max-h-screen">
        <form action="." method="POST" onSubmit={onSubmitHandler}>
          <div className="tw-modal-header">
            <p
              className="tw-modal-title tw-text-grey-body"
              data-testid="header">
              {header}
            </p>
          </div>
          <div className="tw-modal-body">
            <div className="tw-mb-4">
              <label className="tw-form-label required-field">Policies</label>
              <Select
                isClearable
                isMulti
                aria-label="Select policies"
                isSearchable={false}
                options={initialData.policies?.map((policy) => ({
                  label: getEntityName(policy),
                  value: policy.id,
                }))}
                placeholder="Policies..."
                styles={reactSingleSelectCustomStyle}
                onChange={handleOnChange}
              />
              {errorData?.policies && errorMsg(errorData.policies)}
            </div>
            <Form
              errorData={errorData}
              initialData={initialData}
              ref={formRef}
              saveData={(formData: FormData) => {
                setData(formData);
                onChange && onChange(data);
              }}
            />
          </div>
          <div className="tw-modal-footer" data-testid="cta-container">
            <Button
              size="regular"
              theme="primary"
              variant="link"
              onClick={onCancel}>
              Cancel
            </Button>
            <Button
              data-testid="saveButton"
              size="regular"
              theme="primary"
              type="submit"
              variant="contained">
              Save
            </Button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default AddRoleModal;