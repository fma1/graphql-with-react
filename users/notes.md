**HTTP PUT vs PATCH**

* HTTP PUT is overriding
* HTTP PATCH is a partial update

**3 GraphQL Clients**

* Lokka - As simple as possible, similar to GraphiQL
* Apollo Client - Balanced between features and complexity, produced by same guys as MeteorJS
* Relay - Best performance for mobile but very complex

**GraphQL Express vs Apollo Server**

* GraphQL Express is the reference implementation of "a GraphQL API server over an Express webserver" from Facebook and the API is fairly stable
* Apollo Server is in very active development and constantly changes
  * Breaks up the schema of a type and resolvers for a type into 2 different files
* Neither is better or worse but GraphQL Express is used in the course because of the stable API