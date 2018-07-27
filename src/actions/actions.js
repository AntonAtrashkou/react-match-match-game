export const isFetching = isFetching => ({
  type: 'IS_FETCHING',
  isFetching,
});

export const gotKeycloakObject = keycloak => ({
  type: 'GOT_KEYCLOAK_OBJECT',
  keycloak,
});
