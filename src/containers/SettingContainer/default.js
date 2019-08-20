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
        title: 'Address 1',
        type: 'text',
        db: 'address1',
        placeholder: 'Enter Your Address',
        ERROR_MESSAGE: null
    },
    {
        title: 'Address 2',
        type: 'text',
        db: 'address2',
        placeholder: '(optional) apt, suite, unit, floor, etc.',
        ERROR_MESSAGE: null
    },
    {
        title: 'City',
        type: 'text',
        db: 'city',
        placeholder: 'Enter your city',
        ERROR_MESSAGE: null
    },
    {
        title: 'State',
        type: 'text',
        db: 'state',
        placeholder: 'Enter your state',
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
    },
    {
        title: 'Info',
        type: 'text',
        db: 'info',
        placeholder: '(optional) any information',
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
