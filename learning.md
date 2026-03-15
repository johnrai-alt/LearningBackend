# User Register

## For Normal User
    1. Fill up the form
    2. click register button

## For Developer 
    1. Destructure form data (eg: Fullname, email, password)
    2. check for the validation(eeg: all fields are required )
    3. check for the unique email (eg: must be unique)
    4. hashing the password
    5. Generate token {send token and store it to frontend (either in localhost or in cookies )}
    6. message via status code.
        200("sucess response'))
        201("new  data created")
        400("Bad request") (normal error msg)
        404("......not found ")
        500("internal server error")