export default (app) => {
  app.post(
    `/tenant/:tenantId/event`,
    require('./eventCreate').default,
  );
  app.put(
    `/tenant/:tenantId/event/:id`,
    require('./eventUpdate').default,
  );
  app.post(
    `/tenant/:tenantId/event/import`,
    require('./eventImport').default,
  );
  app.delete(
    `/tenant/:tenantId/event`,
    require('./eventDestroy').default,
  );
  app.get(
    `/tenant/:tenantId/event/autocomplete`,
    require('./eventAutocomplete').default,
  );
  app.get(
    `/tenant/:tenantId/event`,
    require('./eventList').default,
  );
  app.get(
    `/tenant/:tenantId/event/:id`,
    require('./eventFind').default,
  );
};