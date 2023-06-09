const SearchArea = require("../components/base/SearchArea/lang/en");
const CountDown = require("../components/base/CountDown/lang/en");
const ElButtonCustom = require("../components/base/ElButtonCustom/lang/en");
const ElLinkCustom = require("../components/base/ElLinkCustom/lang/en");
const ElUploadCustom = require("../components/base/ElUploadCustom/lang/en");
const IconPicker = require("../components/base/IconPicker/lang/en");
const validate = require("../utils/validator/lang/en");

module.exports = {
    system: {
        name: 'Background management system',
        fullScreen: "Full screen",
        cancelFullScreen: "Cancel full screen",
        theme: 'theme',
        tabOptions: 'Tab options',
        closeOther: 'Close other',
        closeAll: 'Close all',
        search: 'Search',
        notFoundTips: "Ahhh ~ the page you visited doesn't exist",
        noAuthorityTips: "Ahhh ~ you don't have permission to access this page",
        homePage: 'Back to home page',
        backSpace: 'Back to previous page',
        message: 'Message center | there are {message} unread messages | there are {message} unread messages',
        changePassword: 'Change Password',
        changeAvatar: 'Change Avatar',
        welcome: "Welcome back",
        signOut: 'Log out'
    },
    components: {
        SearchArea,
        CountDown,
        ElButtonCustom,
        ElLinkCustom,
        ElUploadCustom,
        IconPicker
    },
    validate,
    pages: {
        common: {
            allProvince: 'All provinces',
            allCity: 'All cities',
            allArea: 'All areas',
            allSchool: 'All schools',
            allGrades: 'All grades',
            allClasses: 'All classes',
            allStatus: 'All status',
            allPlatforms: 'All platforms',
            AllRoles: "All roles",
            AllGenders: "All genders",
            allCategories: 'All categories',
            back: 'Back',
            clickUpload: 'Click upload',
            uploadAgain: 'Re upload',
            audition: 'Audition',
            downLoad: 'download',
            audio: 'audio',
            video: 'video',
            grade: 'grade',
            class: 'class',
            startTime: 'start time',
            endTime: 'End time',
            day: 'day',
            time: 'hour',
            to: 'to',
            addToday: 'New today',
            man: 'male',
            woman: 'female',
            disable: 'Disable',
            batchDisable: 'Batch disable',
            enabled: 'Enable',
            batchEnabled: 'Batch enable',
            del: 'Delete',
            batchDel: 'Batch delete',
            batchEnableTips: 'Please select the data to be enabled first',
            batchDisableTips: 'Please select the data to be disabled first',
            batchDleTips: 'Please select the data to be deleted first',
            import: 'Import',
            batchImport: 'Batch import',
            export: 'export',
            batchExport: 'Batch export',
            audit: 'to examine',
            batchAudit: 'Batch audit',
            untying: 'Unbundling',
            newlyAdded: 'newly added',
            edit: 'edit',
            see: 'see',
            basicInfo: 'Basic information',
            tag: 'label',
            details: 'details',
            operationLog: 'Operation log',
            operation: '操作',
            noData: 'no data',
            cancel: 'cancel',
            submit: 'save',
            confirmTips: 'Tips',
            confirmWarn: 'warning',
            uploadPictures: 'Upload pictures',
            uploadFileType: 'Only file type {type} is supported',
            uploadFileSize: 'The file size is limited to {size} KB',
            uploadFileNumber: 'You can only upload {number} files at most',
            uploadFileError: 'Failed to upload. Please upload again or try again later'
        },
        login: {
            userTip: "enter one user name",
            passwordTips: "Please input a password",
            loginBtn: "Login"
        },
        password: {
            oldPasswordText: 'Old password',
            newPasswordText: 'New password',
            confirmPasswordText: 'Reconfirm password',
            oldPassword: 'Please enter the old password',
            newPassword: 'Please enter a new password',
            confirmPassword: 'Please enter the new password again',
            submit: 'submit',
            confirmText: 'Confirm password change?',
            confirmTips: 'Tips',
            successTips: 'Password modified successfully'
        },
        BackstageUserManage: {
            title: "Background user management",
            keyWord: "User name",
            reset: 'reset password',
            batchReset: 'Batch reset password',
            user: "user",
            fullNameText: "name",
            fullNameTips: "Please enter your real name",
            nicknameText: "nickname",
            nicknameTips: "Please enter your nickname",
            phoneText: "phone",
            phoneTips: "Please enter your mobile phone number",
            idCardText: "idCard",
            idCardTips: "Please enter your ID number",
            accountText: "account",
            accountTips: "Please enter the account number",
            passwordText: "password",
            passwordTips: "Please input a password",
            roleText: "role",
            roleTips: "Please select a role",
            areaText: "area",
            areaTips: "Please select region",
            areaDescText: "Detail address",
            areaDescTips: "Please enter the detailed address"
        }
    }
}
