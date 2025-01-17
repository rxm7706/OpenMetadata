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

package org.openmetadata.service.jdbi3;

import static org.openmetadata.service.Entity.ALERT;
import static org.openmetadata.service.Entity.ALERT_ACTION;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.UUID;
import lombok.extern.slf4j.Slf4j;
import org.openmetadata.schema.entity.alerts.Alert;
import org.openmetadata.schema.entity.alerts.AlertActionStatus;
import org.openmetadata.schema.entity.alerts.AlertFilterRule;
import org.openmetadata.schema.type.EntityReference;
import org.openmetadata.schema.type.Relationship;
import org.openmetadata.service.Entity;
import org.openmetadata.service.alerts.AlertUtil;
import org.openmetadata.service.alerts.AlertsPublisherManager;
import org.openmetadata.service.resources.alerts.AlertResource;
import org.openmetadata.service.util.EntityUtil;
import org.openmetadata.service.util.EntityUtil.Fields;
import org.openmetadata.service.util.JsonUtils;

@Slf4j
public class AlertRepository extends EntityRepository<Alert> {
  public static final String COLLECTION_PATH = "/v1/alerts";
  static final String ALERT_PATCH_FIELDS = "triggerConfig,filteringRules,alertActions";
  static final String ALERT_UPDATE_FIELDS = "triggerConfig,filteringRules,alertActions";

  public AlertRepository(CollectionDAO dao) {
    super(
        AlertResource.COLLECTION_PATH,
        Entity.ALERT,
        Alert.class,
        dao.alertDAO(),
        dao,
        ALERT_PATCH_FIELDS,
        ALERT_UPDATE_FIELDS);
  }

  @Override
  public Alert setFields(Alert entity, Fields fields) throws IOException {
    entity.setAlertActions(fields.contains("alertActions") ? getAlertActions(entity) : null);
    return entity; // No fields to set
  }

  @Override
  public void prepare(Alert entity) {
    validateFilterRules(entity);
  }

  private void validateFilterRules(Alert entity) {
    // Resolve JSON blobs into Rule object and perform schema based validation
    List<AlertFilterRule> rules = entity.getFilteringRules();
    // Validate all the expressions in the rule
    for (AlertFilterRule rule : rules) {
      AlertUtil.validateExpression(rule.getCondition(), Boolean.class);
    }
    rules.sort(Comparator.comparing(AlertFilterRule::getName));
  }

  @Override
  public void storeEntity(Alert entity, boolean update) throws IOException {
    EntityReference owner = entity.getOwner();
    // Don't store owner, database, href and tags as JSON. Build it on the fly based on relationships
    entity.withOwner(null).withHref(null);
    store(entity, update);

    // Restore the relationships
    entity.withOwner(owner);
  }

  @Override
  public void storeRelationships(Alert entity) {
    storeOwner(entity, entity.getOwner());
    // Store Alert to AlertAction RelationShip
    for (EntityReference actionRef : entity.getAlertActions()) {
      addRelationship(entity.getId(), actionRef.getId(), ALERT, ALERT_ACTION, Relationship.USES);
    }
  }

  @Override
  public void restorePatchAttributes(Alert original, Alert updated) {
    updated.withId(original.getId()).withName(original.getName());
  }

  @Override
  public AlertUpdater getUpdater(Alert original, Alert updated, Operation operation) {
    return new AlertUpdater(original, updated, operation);
  }

  private List<EntityReference> getAlertActions(Alert entity) throws IOException {
    List<CollectionDAO.EntityRelationshipRecord> testCases =
        findTo(entity.getId(), ALERT, Relationship.USES, ALERT_ACTION);
    return EntityUtil.getEntityReferences(testCases);
  }

  public AlertActionStatus getAlertActionStatus(UUID alertID, UUID alertActionId) throws IOException {
    String alertStatusString =
        daoCollection.entityExtensionTimeSeriesDao().getLatestExtension(alertID.toString(), alertActionId.toString());
    return JsonUtils.readValue(alertStatusString, AlertActionStatus.class);
  }

  public class AlertUpdater extends EntityUpdater {
    public AlertUpdater(Alert original, Alert updated, Operation operation) {
      super(original, updated, operation);
    }

    @Override
    public void entitySpecificUpdate() throws IOException {
      recordChange("triggerConfig", original.getTriggerConfig(), updated.getTriggerConfig());
      recordChange("filteringRules", original.getFilteringRules(), updated.getFilteringRules());
      updateToRelationships(
          "alertActions",
          ALERT,
          original.getId(),
          Relationship.USES,
          ALERT_ACTION,
          new ArrayList<>(original.getAlertActions()),
          new ArrayList<>(updated.getAlertActions()),
          false);
      AlertsPublisherManager.getInstance().updateAlertActionPublishers(updated);
    }
  }
}
