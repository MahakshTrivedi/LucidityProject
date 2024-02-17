# LucidityProject
Assumptions and considerations:
- Added a fallback dummy data as the API threw a "too many requests" error while fetching in local development.
- On the Edit button click, Modal is populated with current values of category, value, price, and quantity.
- Modal enables the save button only when the user has changed at least one of the given values.
- When switch is toggled from admin to user mode, the disabled values are retained as they were before the switch (i.e. disabled remains disabled and vice versa)
- When cancel button or cancel icon is clicked, user's changes are ignored as expected and modal closes immediately after being destroyed.
Bonus points:
- Typescript is maintained throughout the project
- Optimizations like useMemo used whereve necessary and avoided in case of over engineering
- Styled Components approach
- State updates maintained efficiently
- Minimalistic state declaration achieved in order to aim for optimization (i.e. avoiding declaring unnecessary states)
