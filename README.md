EMart
===============


<div style="font-size: 1.5rem;">
  <a href="./README.md">English</a> |
  <a href="./README_ZH.md">中文</a>
</div>
</br>

A simple e-commerce project aimed at creating a low-threshold, one-click deployable online marketplace.

## Directory Structure

The overall directory structure is as follows:

```
├─EMart
│  ├─api                (Data API section using Egg.js framework)
│  ├─admin              (Admin management interface)
│  ├─client             (Online marketplace client, built with hbuild+vue, supports multi-platform deployment)
│  ├─doc                (Documentation and resources)
│  │  ├─database.md      (Data structure)
│  ├─docker-compose.yml  (Docker-compose container orchestration configuration file for one-click startup)
│  ├─README.md          (Project documentation)
│  ├─README_ZH.md       (Project documentation - Chinese)
```
## Feature Roadmap

**Version 1.0**

1. Basic functionality: User registration, login, logout, simple dashboard
2. Access control management (admin list, role types, password modification for users with access to the backend)
3. Product management (product list, product details, listing and delisting, recycle bin, inventory management)
4. Order management (order list, order details, shipment)
5. User management (list of users who have accessed the platform)

**Version 2.0**

6. System settings (payment, logistics, third-party login configuration, etc.)
7. Content management (articles, advertisements, announcements, etc.)
8. Store customization (customizing the client-side display page style)

## Copyright Information

EMart is released under the [Apache License 2.0]() open-source license and is available for free use.

Copyright © 2023 by EMart
