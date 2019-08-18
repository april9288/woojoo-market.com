export const defaultMenu = [
    'Edit Profile',
    'Change Password',
    'Delete Account'
];

export const defaultInputs = [
    {
        title: 'First Name',
        type: 'text',
        db: 'firstname',
        placeholder: 'Enter Your First Name',
        ERROR_MESSAGE: null
    },
    {
        title: 'Last Name',
        type: 'text',
        db: 'lastname',
        placeholder: 'Enter Your Last Name',
        ERROR_MESSAGE: null
    },
    {
        title: 'Address',
        type: 'text',
        db: 'address',
        placeholder: 'Enter Your Address',
        ERROR_MESSAGE: null
    },
    {
        title: 'Zip Code',
        type: 'number',
        db: 'zipcode',
        placeholder: 'Enter Your Zip Code',
        ERROR_MESSAGE: null
    },
    {
        title: 'Phone',
        type: 'text',
        db: 'phone',
        placeholder: 'Enter Your Phone Number',
        ERROR_MESSAGE: null
    },
    {
        title: 'Website',
        type: 'text',
        db: 'website',
        placeholder: 'Enter Your Web URL',
        ERROR_MESSAGE: null
    }
];

export const defaultDeleteState = {
    status: false,
    message: null
};

export const defaultChangePasswordInputs = [
    {
        title: 'New Password',
        type: 'password',
        db: 'newPassword',
        placeholder: 'Enter Your New Password',
        ERROR_MESSAGE: null
    },
    {
        title: 'New Password Confirm',
        type: 'password',
        db: 'newPassword2',
        placeholder: 'Confirm Your New Password',
        ERROR_MESSAGE: null
    }
];

export const defaultChangePasswordState = {
    newPassword: '',
    newPassword2: '',
    status: false,
    message: null
};
