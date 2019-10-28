## zombie-manager
We've got the zombies under control, but we need to keep track of them. That's where you come in. We need you to build an app for us. We need you to build a zombie manager.

We can quarantine zombies in three locations: the hospital, the school, and the warehouse. We need the app to keep track of where each zombie is being held, how many zombies are in each location, and we need to be able to move zombies between the locations.

# Assumptions:
- Zombies can be represented by an integer in the root component's state and don't need to be their own entities/components
- Only 1 zombie can be quarantined or moved at a time
- There's no limit on how many zombies a single location can hold
- No new locations can be introduced at any time
- Use of component libraries (namely react-bootstrap) is allowed

# Notes:
- I tested this project with Chrome Version 77.0.3865.120 (Official Build) (64-bit) running on Windows 10. I tested with other browsers (desktop Edge and Firefox) and noticed `react-bootstrap` components behave a little differently depending on the environment (though nothing is broken).
- In the interest of time I did not write tests for this project other than checking that the root component rendered properly; if this were a real-world application there would be many tests.