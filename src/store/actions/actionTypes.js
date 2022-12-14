const actionTypes = Object.freeze({
    //app
    APP_START_UP_COMPLETE: 'APP_START_UP_COMPLETE',
    SET_CONTENT_OF_CONFIRM_MODAL: 'SET_CONTENT_OF_CONFIRM_MODAL',
    CHANGE_LANGUAGE: 'CHANGE_LANGUAGE',

    //admin
    // ADMIN_LOGIN_SUCCESS: 'ADMIN_LOGIN_SUCCESS',
    // ADMIN_LOGIN_FAIL: 'ADMIN_LOGIN_FAIL',


    //user
    ADD_USER_SUCCESS: 'ADD_USER_SUCCESS',
    USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
    USER_LOGIN_FAIL: "USER_LOGIN_FAIL",
    PROCESS_LOGOUT: 'PROCESS_LOGOUT',

    //admin
    FETCH_GENDER_START: 'FETCH_GENDER_START',
    FETCH_GENDER_SECCESS: 'FETCH_GENDER_SECCESS',
    FETCH_GENDER_FAILED: 'FETCH_GENDER_FAILED',

    FETCH_POSITION_SECCESS: 'FETCH_POSOTION_SECCESS',
    FETCH_POSITION_FAILED: 'FETCH_POSOTION_FAILDED',

    FETCH_ROLE_SECCESS: 'FETCH_ROLE_SECCESS',
    FETCH_ROLE_FAILED: ' FETCH_ROLE_FAILED',

    CREATE_USER_SUCCESS: 'CREATE_USER_SUCCESS',
    CREATE_USER_FAILED: 'CREATE_USER_FAILED',

    FETCH_ALL_USERS_SECCESS: 'FETCH_ALL_USERS_SECCESS',
    FETCH_ALL_USERS_FAILED: ' FETCH_ALL_USERS_FAILED',

    DELETE_USER_SUCCESS: 'DELETE_USER_SUCCESS',
    DELETE_USER_FAILED: 'DELETE_USER_FAILED',

    EDIT_USER_SUCCESS: 'EDIT_USER_SUCCESS',
    EDIT_USER_FAILED: 'EDIT_USER_FAILED',

    FETCH_TOP_DOCTOR_SECCESS: 'FETCH_TOP_DOCTOR_SECCESS',
    FETCH_TOP_DOCTOR_FAILED: ' FETCH_TOP_DOCTOR_FAILED',

    FETCH_ALL_DOCTOR_SECCESS: 'FETCH_ALL_DOCTOR_SECCESS',
    FETCH_ALL_DOCTOR_FAILED: ' FETCH_ALL_DOCTOR_FAILED',

    SAVE_DETAIL_DOCTOR_SECCESS: 'SAVE_DETAIL_DOCTOR_SECCESS',
    SAVE_DETAIL_DOCTOR_FAILED: ' SAVE_DETAIL_DOCTOR_FAILED',

    FETCH_ALLCODE_SCHEDULE_TIME_SECCESS: 'FETCH_ALLCODE_SCHEDULE_TIME_SECCESS',
    FETCH_ALLCODE_SCHEDULE_TIME_FAILED: ' FETCH_ALLCODE_SCHEDULE_TIME_FAILED',

    FETCH_ALL_REQUIRED_DATA_SECCESS: 'FETCH_ALL_REQUIRED_DATA_SECCESS',
    FETCH_ALL_REQUIRED_DATA_FAILED: ' FETCH_ALL_REQUIRED_DATA_FAILED',

})

export default actionTypes;