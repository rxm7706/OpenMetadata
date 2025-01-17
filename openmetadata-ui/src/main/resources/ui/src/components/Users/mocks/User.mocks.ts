import { AssetsDataType } from 'Models';

export const mockUserData = {
  id: 'd6764107-e8b4-4748-b256-c86fecc66064',
  name: 'xyz',
  displayName: 'XYZ',
  version: 0.1,
  updatedAt: 1648704499857,
  updatedBy: 'xyz',
  email: 'xyz@gmail.com',
  href: 'http://localhost:8585/api/v1/users/d6764107-e8b4-4748-b256-c86fecc66064',
  isAdmin: false,
  profile: {
    images: {
      image512:
        'https://lh3.googleusercontent.com/a-/AOh14Gh8NPux8jEPIuyPWOxAB1od9fGN188Kcp5HeXgc=s512-c',
    },
  },
  teams: [
    {
      id: '3362fe18-05ad-4457-9632-84f22887dda6',
      type: 'team',
      name: 'Finance',
      description: 'This is Finance description.',
      displayName: 'Finance',
      deleted: false,
      href: 'http://localhost:8585/api/v1/teams/3362fe18-05ad-4457-9632-84f22887dda6',
    },
    {
      id: '5069ddd4-d47e-4b2c-a4c4-4c849b97b7f9',
      type: 'team',
      name: 'Data_Platform',
      description: 'This is Data_Platform description.',
      displayName: 'Data_Platform',
      deleted: false,
      href: 'http://localhost:8585/api/v1/teams/5069ddd4-d47e-4b2c-a4c4-4c849b97b7f9',
    },
    {
      id: '7182cc43-aebc-419d-9452-ddbe2fc4e640',
      type: 'team',
      name: 'Customer_Support',
      description: 'This is Customer_Support description.',
      displayName: 'Customer_Support',
      deleted: true,
      href: 'http://localhost:8585/api/v1/teams/7182cc43-aebc-419d-9452-ddbe2fc4e640',
    },
  ],
  owns: [],
  follows: [],
  deleted: false,
  roles: [
    {
      id: 'ce4df2a5-aaf5-4580-8556-254f42574aa7',
      type: 'role',
      name: 'DataConsumer',
      description:
        'Users with Data Consumer role use different data assets for their day to day work.',
      displayName: 'Data Consumer',
      deleted: false,
      href: 'http://localhost:8585/api/v1/roles/ce4df2a5-aaf5-4580-8556-254f42574aa7',
    },
  ],
  inheritedRoles: [
    {
      id: '3fa30148-72f6-4205-8cab-56696cc23440',
      type: 'role',
      name: 'DataConsumer',
      fullyQualifiedName: 'DataConsumer',
      description:
        'Users with Data Consumer role use different data assets for their day to day work.',
      displayName: 'Data Consumer',
      deleted: false,
      href: 'http://localhost:8585/api/v1/roles/3fa30148-72f6-4205-8cab-56696cc23440',
    },
  ],
};

export const mockTeamsData = {
  data: [
    {
      id: '28aebba3-9399-46b5-af3a-7fcd852bbec9',
      teamType: 'Group',
      name: 'Cloud_Infra',
      fullyQualifiedName: 'Cloud_Infra',
      displayName: 'Cloud_Infra',
      description: 'This is Cloud_Infra description.',
      version: 0.3,
      updatedAt: 1664444252977,
      updatedBy: 'bharatdussa',
      href: 'http://localhost:8585/api/v1/teams/28aebba3-9399-46b5-af3a-7fcd852bbec9',
      childrenCount: 0,
      userCount: 18,
      isJoinable: true,
      changeDescription: {
        fieldsAdded: [],
        fieldsUpdated: [
          { name: 'teamType', oldValue: 'Department', newValue: 'Group' },
        ],
        fieldsDeleted: [],
        previousVersion: 0.2,
      },
      deleted: false,
      defaultRoles: [],
      inheritedRoles: [
        {
          id: '3ed7b995-ce8b-4720-9beb-6f4a9c626920',
          type: 'role',
          name: 'DataConsumer',
          fullyQualifiedName: 'DataConsumer',
          description:
            'Users with Data Consumer role use different data assets for their day to day work.',
          displayName: 'Data Consumer',
          deleted: false,
          href: 'http://localhost:8585/api/v1/roles/3ed7b995-ce8b-4720-9beb-6f4a9c626920',
        },
      ],
    },
    {
      id: 'd03d909c-fad6-4d71-b9b4-797187b69f80',
      teamType: 'Department',
      name: 'Customer_Support',
      fullyQualifiedName: 'Customer_Support',
      displayName: 'Customer_Support',
      description: 'This is Customer_Support description.',
      version: 0.1,
      updatedAt: 1663830444887,
      updatedBy: 'anonymous',
      href: 'http://localhost:8585/api/v1/teams/d03d909c-fad6-4d71-b9b4-797187b69f80',
      childrenCount: 1,
      userCount: 22,
      isJoinable: true,
      deleted: false,
      defaultRoles: [],
      inheritedRoles: [
        {
          id: '3ed7b995-ce8b-4720-9beb-6f4a9c626920',
          type: 'role',
          name: 'DataConsumer',
          fullyQualifiedName: 'DataConsumer',
          description:
            'Users with Data Consumer role use different data assets for their day to day work.',
          displayName: 'Data Consumer',
          deleted: false,
          href: 'http://localhost:8585/api/v1/roles/3ed7b995-ce8b-4720-9beb-6f4a9c626920',
        },
      ],
    },
    {
      id: '3f188b91-049f-44e5-8d12-b11047ddfcbc',
      teamType: 'Group',
      name: 'Data_Platform',
      fullyQualifiedName: 'Data_Platform',
      displayName: 'Data_Platform',
      description: 'This is Data_Platform description.',
      version: 0.2,
      updatedAt: 1664444283179,
      updatedBy: 'bharatdussa',
      href: 'http://localhost:8585/api/v1/teams/3f188b91-049f-44e5-8d12-b11047ddfcbc',
      childrenCount: 0,
      userCount: 17,
      isJoinable: true,
      changeDescription: {
        fieldsAdded: [],
        fieldsUpdated: [
          { name: 'teamType', oldValue: 'Department', newValue: 'Group' },
        ],
        fieldsDeleted: [],
        previousVersion: 0.1,
      },
      deleted: false,
      defaultRoles: [],
      inheritedRoles: [
        {
          id: '3ed7b995-ce8b-4720-9beb-6f4a9c626920',
          type: 'role',
          name: 'DataConsumer',
          fullyQualifiedName: 'DataConsumer',
          description:
            'Users with Data Consumer role use different data assets for their day to day work.',
          displayName: 'Data Consumer',
          deleted: false,
          href: 'http://localhost:8585/api/v1/roles/3ed7b995-ce8b-4720-9beb-6f4a9c626920',
        },
      ],
    },
  ],
  paging: { total: 7 },
};

export const mockUserRole = {
  data: [
    {
      id: '3ed7b995-ce8b-4720-9beb-6f4a9c626920',
      name: 'DataConsumer',
      fullyQualifiedName: 'DataConsumer',
      displayName: 'Data Consumer',
      description:
        'Users with Data Consumer role use different data assets for their day to day work.',
      version: 0.1,
      updatedAt: 1663825430544,
      updatedBy: 'admin',
      href: 'http://localhost:8585/api/v1/roles/3ed7b995-ce8b-4720-9beb-6f4a9c626920',
      allowDelete: false,
      deleted: false,
    },
  ],
  paging: {
    total: 1,
  },
};

export const mockEntityData: AssetsDataType = {
  data: [
    {
      index: 'table_search_index',
      id: 'ff274334-84cf-4cb5-9450-acd0ae00e8fd',
      name: 'dim_customer',
      displayName: 'dim_customer',
      description: 'The dimension table contains data about your customers.',
      fullyQualifiedName: 'sample_data.ecommerce_db.shopify.dim_customer',
      tableType: 'Regular',
      tags: [],
      dailyStats: 0,
      dailyPercentileRank: 0,
      weeklyStats: 0,
      weeklyPercentileRank: 0,
      service: 'sample_data',
      serviceType: 'BigQuery',
      tier: null,
      owner: {
        deleted: false,
        name: 'admin',
        id: '6efae30d-8284-4af4-b608-e3819172c0c5',
        href: 'http://localhost:8585/api/v1/users/6efae30d-8284-4af4-b608-e3819172c0c5',
        type: 'user',
        fullyQualifiedName: 'admin',
      },
      database: 'ecommerce_db',
      databaseSchema: 'shopify',
      entityType: 'table',
      deleted: false,
    },
    {
      index: 'mlmodel_search_index',
      id: 'd9957030-4986-4241-82c2-83d0d19c8b35',
      name: 'forecast_sales',
      displayName: 'Sales Forecast Predictions',
      description: 'Sales Forecast Predictions Model',
      fullyQualifiedName: 'mlflow_svc.forecast_sales',
      tags: [],
      service: 'mlflow_svc',
      serviceType: 'Mlflow',
      tier: null,
      owner: {
        deleted: false,
        name: 'admin',
        id: '6efae30d-8284-4af4-b608-e3819172c0c5',
        href: 'http://localhost:8585/api/v1/users/6efae30d-8284-4af4-b608-e3819172c0c5',
        type: 'user',
        fullyQualifiedName: 'admin',
      },
      entityType: 'mlmodel',
      deleted: false,
    },
    {
      index: 'dashboard_search_index',
      id: '1a5d1bdb-63db-4536-851e-e3886498ccbc',
      name: 'FCC New Coder Survey 2018',
      displayName: 'FCC New Coder Survey 2018',
      description: '',
      fullyQualifiedName: 'sample_superset.11',
      tags: [],
      dailyStats: 0,
      dailyPercentileRank: 0,
      weeklyStats: 0,
      weeklyPercentileRank: 0,
      service: 'sample_superset',
      serviceType: 'Superset',
      tier: null,
      owner: {
        deleted: false,
        name: 'admin',
        id: '6efae30d-8284-4af4-b608-e3819172c0c5',
        href: 'http://localhost:8585/api/v1/users/6efae30d-8284-4af4-b608-e3819172c0c5',
        type: 'user',
        fullyQualifiedName: 'admin',
      },
      entityType: 'dashboard',
      deleted: false,
    },
    {
      index: 'table_search_index',
      id: '7f2eaa16-beae-4c25-89ca-b337bd3b0ab9',
      name: 'dim.shop',
      displayName: 'dim.shop',
      description:
        'This dimension table contains online shop information. This table contains one shop per row.',
      fullyQualifiedName: 'sample_data.ecommerce_db.shopify."dim.shop"',
      tableType: 'Regular',
      tags: [],
      dailyStats: 0,
      dailyPercentileRank: 0,
      weeklyStats: 0,
      weeklyPercentileRank: 0,
      service: 'sample_data',
      serviceType: 'BigQuery',
      tier: null,
      owner: {
        deleted: false,
        name: 'admin',
        id: '6efae30d-8284-4af4-b608-e3819172c0c5',
        href: 'http://localhost:8585/api/v1/users/6efae30d-8284-4af4-b608-e3819172c0c5',
        type: 'user',
        fullyQualifiedName: 'admin',
      },
      database: 'ecommerce_db',
      databaseSchema: 'shopify',
      entityType: 'table',
      deleted: false,
    },
    {
      index: 'table_search_index',
      id: '7e9e51d6-8646-4b86-84df-ee1c95b992bc',
      name: 'dim.api/client',
      displayName: 'dim.api/client',
      description:
        'This dimension table contains a row for each channel or app that your customers use to create orders.',
      fullyQualifiedName: 'sample_data.ecommerce_db.shopify."dim.api/client"',
      tableType: 'Regular',
      tags: [],
      dailyStats: 0,
      dailyPercentileRank: 0,
      weeklyStats: 0,
      weeklyPercentileRank: 0,
      service: 'sample_data',
      serviceType: 'BigQuery',
      tier: null,
      owner: {
        deleted: false,
        name: 'admin',
        id: '6efae30d-8284-4af4-b608-e3819172c0c5',
        href: 'http://localhost:8585/api/v1/users/6efae30d-8284-4af4-b608-e3819172c0c5',
        type: 'user',
        fullyQualifiedName: 'admin',
      },
      database: 'ecommerce_db',
      databaseSchema: 'shopify',
      entityType: 'table',
      deleted: false,
    },
    {
      index: 'table_search_index',
      id: 'ff274334-84cf-4cb5-9450-acd0ae00e8fd',
      name: 'dim_customer',
      displayName: 'dim_customer',
      description: 'The dimension table contains data about your customers.',
      fullyQualifiedName: 'sample_data.ecommerce_db.shopify.dim_customer',
      tableType: 'Regular',
      tags: [],
      dailyStats: 0,
      dailyPercentileRank: 0,
      weeklyStats: 0,
      weeklyPercentileRank: 0,
      service: 'sample_data',
      serviceType: 'BigQuery',
      tier: null,
      owner: {
        deleted: false,
        name: 'admin',
        id: '6efae30d-8284-4af4-b608-e3819172c0c5',
        href: 'http://localhost:8585/api/v1/users/6efae30d-8284-4af4-b608-e3819172c0c5',
        type: 'user',
        fullyQualifiedName: 'admin',
      },
      database: 'ecommerce_db',
      databaseSchema: 'shopify',
      entityType: 'table',
      deleted: false,
    },
  ],
  total: 6,
  currPage: 1,
};
