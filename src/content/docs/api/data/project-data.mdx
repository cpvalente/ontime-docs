---
title: Project data
description: Documentation for the HTTP API on the project data
---

:::note
This list is incomplete. \
By not documenting some of the endpoints, we allow ourselves the opportunity to make changes.

If you think this is incorrect or that there should be contracts for extra resources, [**get in touch!**](mailto:mail@getontime.no)
:::

## Rundown

The following endpoints allow operations on the rundown of the currently loaded project.

:::tip[Show me the code]
This documentation can get out of sync as we add new features to Ontime.

[Follow the link for the code entrypoint](https://github.com/cpvalente/ontime/blob/master/apps/server/src/api-data/rundown/rundown.router.ts)
:::

### GET Rundown

Allows requesting the full rundown.

**Request**

```bash
GET <localhost:4001>/data/rundown/current
```

**Response**

```ts
200: {
  id: RundownId;
  title: string;
  order: EntryId[];
  flatOrder: EntryId[];
  entries: RundownEntries;
  revision: number;
}
```

### POST Entry

Adds a new entry to the rundown.

**Request**

```bash
POST <localhost:4001>/data/rundown/:rundownId/entry
```

**Request Body**

The endpoint expect the properties of [Ontime Event](/api/data/event-data). All properties are optional.

Additionally you can send an after property with the ID of the event after which the element should be added. \
If this property is not provided, the event is appended to the end of the rundown.

```
| property             | value                                     |
| -------------------- | ----------------------------------------- |
| type                 | "event" | "delay" | "group" | "milestone" |
| after                | Optional<string>                          |
```

**Response**

```ts
201: {OntimeEntry}
```

### PUT Event

Patches the contents of an existing event.

**Request**

```bash
PUT <localhost:4001>/data/rundown/:rundownId/:entryId
```

**Request Body**

The endpoint expect a patch object that includes an event ID and any of the properties of [Ontime Event](/api/data/event-data).

All properties are optional.

```

| property             | value                       |
| -------------------- | --------------------------- |
| id                   | Required<string>            |
```

**Response**

The response contains the event as it is added to the rundown.

```ts
200: {OntimeEntry}
```

### DELETE Event

Deletes events given its IDs.

**Request**

```bash
DELETE <localhost:4001>/data/rundown/:rundownId/:entryId
```

**Request Body**

```

| param                | value                |
| -------------------- | -------------------- |
| ids                  | Required<string[]>   |
```

**Response**

```ts
204: {message: 'Events deleted'}
```
