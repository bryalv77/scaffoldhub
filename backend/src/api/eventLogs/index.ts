export default (app) => {
  app.post(
    `/tenant/:tenantId/event-logs`,
    require('./eventLogsCreate').default,
  );
  app.put(
    `/tenant/:tenantId/event-logs/:id`,
    require('./eventLogsUpdate').default,
  );
  app.post(
    `/tenant/:tenantId/event-logs/import`,
    require('./eventLogsImport').default,
  );
  app.delete(
    `/tenant/:tenantId/event-logs`,
    require('./eventLogsDestroy').default,
  );
  app.get(
    `/tenant/:tenantId/event-logs/autocomplete`,
    require('./eventLogsAutocomplete').default,
  );
  app.get(
    `/tenant/:tenantId/event-logs`,
    require('./eventLogsList').default,
  );
  app.get(
    `/tenant/:tenantId/event-logs/:id`,
    require('./eventLogsFind').default,
  );
};