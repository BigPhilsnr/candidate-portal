export default [
  {
    header: 'Jobs',
  },
  {
    title: 'Available jobs',
    route: 'career-jobs',
    icon: 'MailIcon',
  },
  {
    title: 'My Applications',
    route: 'career-my-applications',
    icon: 'CheckSquareIcon',
  },
  {
    title: 'Profile',
    route: 'career-profile',
    icon: 'PackageIcon',
  },
  {
    title: 'Account',
    icon: 'UserIcon',
    children: [
      {
        title: 'Settings',
        route: 'career-account-setting',
      },
    ],
  },
]
