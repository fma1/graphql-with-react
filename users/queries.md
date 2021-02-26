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