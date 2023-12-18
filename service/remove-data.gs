try {
  // Delete the user property 'DISPLAY_UNITS'.
  const userProperties = PropertiesService.getUserProperties();
  userProperties.deleteProperty('DISPLAY_UNITS');
} catch (err) {
  // TODO (developer) - Handle exception
  console.log('Failed with error %s', err.message);
}

try {
  // Get user properties in the current script.
  const userProperties = PropertiesService.getUserProperties();
  // Delete all user properties in the current script.
  userProperties.deleteAllProperties();
} catch (err) {
  // TODO (developer) - Handle exception
  console.log('Failed with error %s', err.message);
}