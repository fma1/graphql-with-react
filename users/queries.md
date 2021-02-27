# Queries

Just UserType no company field:

```
{
  user(id: "23") {
    id,
    firstName,
    age
  }
}
```

UserType with company field:
```
{
  user(id: "23") {
    id,
    firstName,
    age,
    company {
      id,
      name,
      description
    }
  }
}
```

CompanyType with no users field:
```
{
    company(id:"2") {
        id,
        name,
        description
    }
}
```

CompanyType with users field:
```
{
    company(id:"2") {
        id,
        name,
        description,
        users {
            id,
            firstName,
            age
        }
    }
}

```
Multiple companies with named fields (can't have multiple "company" keys in resulting JS object):
```
{
  apple: company(id:"2") {
    id,
    name,
    description
  },
  google: company(id:"2") {
    id,
    name,
    description
  },
}
```

Multiple companies with query fragments:
```
{
  apple: company(id:"2") {
    ...companyDetails
  },
  google: company(id:"2") {
    ...companyDetails
  },
}

fragment companyDetails on Company {
  id,
  name,
  description
}
```

Mutation for adding a user:

```
mutation {
  addUser(firstName:"Stephen", age:26) {
    id,
    firstName,
    age
  }
}
```