try {
  // Get the value for the user property 'DISPLAY_UNITS'.
  const userProperties = PropertiesService.getUserProperties();
  const units = userProperties.getProperty('DISPLAY_UNITS');
  console.log('values of units %s', units);
} catch (err) {
  // TODO (developer) - Handle exception
  console.log('Failed with error %s', err.message);
}

try {
  // Get multiple script properties in one call, then log them all.
  const scriptProperties = PropertiesService.getScriptProperties();
  const data = scriptProperties.getProperties();
  for (const key in data) {
    console.log('Key: %s, Value: %s', key, data[key]);
  }
} catch (err) {
  // TODO (developer) - Handle exception
  console.log('Failed with error %s', err.message);
}