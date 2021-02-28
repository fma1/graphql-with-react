Mutation for adding song

```
mutation {
  addSong(title:"Cold Night") {
    id
  }
}
```

Result:
```
{
  "data": {
    "addSong": {
      "id": "603bbc4d83af2a0a442ae283"
    }
  }
}
```

Mutation to add lyric to a song:

```
mutation {
  addLyricToSong(songId:"603bbc4d83af2a0a442ae283", content:"Oh my oh my it's a cold night") {
    id
  }
}
```

Result:

```
{
  "data": {
    "addLyricToSong": {
      "id": "603bbc4d83af2a0a442ae283"
    }
  }
}
```

Query to query songs:

```
{
  songs {
    id,
    title,
    lyrics {
      content
    }
  }
}
```

Result:

```
{
  "data": {
    "songs": [
      {
        "id": "603bbc4d83af2a0a442ae283",
        "title": "Cold Night",
        "lyrics": [
          {
            "content": "Oh my oh my it's a cold night"
          }
        ]
      }
    ]
  }
}
```