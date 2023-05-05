export const mainLinks =[
    {
        name: "Home",
        url: "/"
    },
    {
        name: "Music Feed",
        url: "music_feed"
    }
]


export const userLinks = (user) => {
  
  return [
    {
        name: "Settings",
        url: "/settings/account",
        react: true
    },
    {
        name: "Logout",
        url: "/logout",
        react: true
    },
    {
      name:"Profile",
      url: user.share_link_url,
      react: false
    }
  ]
}



