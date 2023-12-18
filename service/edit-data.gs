try {
  // Change the unit type in the user property 'DISPLAY_UNITS'.
  const userProperties = PropertiesService.getUserProperties();
  let units = userProperties.getProperty('DISPLAY_UNITS');
  units = 'imperial'; // Only changes local value, not stored value.
  userProperties.setProperty('DISPLAY_UNITS', units); // Updates stored value.
} catch (err) {
  // TODO (developer) - Handle exception
  console.log('Failed with error %s', err.message);
}