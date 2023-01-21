const LgImgData = (req,res) => {
    res.send([
      {
        img:"https://img.freepik.com/premium-vector/red-sky-sunset-mountains-sundown-mountain-range_104785-1121.jpg",
        text:"Lorem ipsum dolor sit amet",
        type:"Lorem ipsum",
        date:"Nov/2022"
      }
    ])
}
const SmImgData = (req,res) => {
    res.send([
    {
        img:"https://i.pinimg.com/originals/ba/6c/6f/ba6c6f1291b1643378878eb41fef94c7.jpg",
        text:"Lorem ipsum dolor sit amet",
        text1:"Lorem ipsum ",
        type:"lorem epsom",
        date:"Nov/2022"
    },
    {
        img:"https://assets.traveltriangle.com/blog/wp-content/uploads/2018/09/swiss-alps.jpg",
        text:"Lorem ipsum dolor sit amet",
        text1:"Lorem ipsum ",
        type:"lorem epsom",
        date:"Nov/2022"
    }
    ])
}

module.exports.getLgImgData = LgImgData;
module.exports.getSmImgData = SmImgData;