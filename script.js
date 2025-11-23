const app = document.querySelector(".app");
app.append(
    new Header(
        "Z Comics", "The Power To Dream", 
        [['home', '#'], ['seo', '#']], 
        [
            ['VillainX', 'https://i.postimg.cc/qBNmvMv9/543766081_17916979698177002_8744154899246751389_n.jpg'],
            ['Transformor', 'https://i.postimg.cc/NMpWqNbD/546613742_17917124133177002_1002516014228711271_n.jpg'],
            ['TZ Counterpart', 'https://i.postimg.cc/nM89H1hB/tzprof1.jpg'],
            ['TZ Counterpart', 'https://i.postimg.cc/nM89H1hB/tzprof1.jpg'],
            ['TZ Counterpart', 'https://i.postimg.cc/nM89H1hB/tzprof1.jpg'],
        ],
        {
            image:'https://i.postimg.cc/05zty2yH/478361138_1125715372641533_2856556633956914184_n.jpg'
        }
    ).render(),
    new FeatureBanner(
        data = {
                title:"Tranformor Comics Now Avaliable",
                subtitle:"Comics",
                banner:{
                    image:"https://i.postimg.cc/QxLqNQPc/530516570_17913501942177002_1600307145690778970_n.jpg",
                    title:"New Comic on Black Valley Comics",
                    subtitle: "Transformor",
                },
                description:"I hope you guys are reading Transformor issue 0 and 1 on @blackvalleycomics  let's gooo 🔥🔥🔥",
                link: ""
            }
    ).render(),
    new HeroSection(            
            data = {
                sectionHeader:{
                    title: "Heroes Gallery"
                },
                sectionGrid:{
                    "Tranformor":{
                        image: "https://i.postimg.cc/sX6pRSWG/475979892_476078948872966_6734785461293099688_n.jpg",
                        year:"2019",
                        theme:"blue"
                    },
                    "Aqua Night":{
                        image: "https://i.postimg.cc/k41xd8S8/475442456_476078842206310_6535180573949098860_n.jpg",
                        year:"2019",
                        theme:"blue"
                    },
                    "Pyro":{
                        image: "https://i.postimg.cc/LXCzMfPL/475650201_476078872206307_3104625268027269989_n.jpg",
                        year:"2019",
                        theme:"red"

                    },                    
                    "Tech Ninja":{
                        image: "https://i.postimg.cc/mDXQGM9N/475774655_476078752206319_6135901406242557149_n.jpg",
                        year:"2019",
                        theme:"navy",
                    },                  
                    "Lady Zero":{
                        image: "https://i.postimg.cc/Tw7rXmbc/475772909_476078862206308_3608175358624413468_n.jpg",
                        year:"2019",
                        theme:"blue",
                    },
                    "Warp":{
                        image:"https://i.postimg.cc/ZR7rh3N9/475869793_476078808872980_4006118531570398885_n.jpg",
                        year:"2020",
                        theme:"blue"
                    },
                    "Claw":{
                        image:"https://i.postimg.cc/k41xd8SB/475980139_476078772206317_5122342360715653189_n.jpg",
                        year:"2020",
                        theme:"navy"
                    }                    
                }
            }).render(),
    new FeatureBanner(
        data ={
            title:"Comic Roll Out Update!",
            subtitle:"this Winter Don't Miss",
            banner:{
                image:"https://i.postimg.cc/LXNrKyvV/559221527_17919575391177002_2846770092504108897_n.jpg",
                title:"",
                subtitle: "Universe D 2025",
            },
            description:"Join us along the way to reveal our next plan and vision as we keep you entertained",
            link:""            
        }
    ).render(),
    new AnnouncementSection(
        data = {
            title: "IMPORTANT ANNOUNCEMENT!!",
            description: "Don't forget to keep up with update on our social platforms YT, Facebook and IG",
            buttonText: "Follow",
            link: "https://linktr.ee/Z_comics_studios?utm_source=linktree_profile_share&ltsid=4501acc4-cec4-4df2-b751-38eca4ffa8de"
        }
    ).render()
);

// Add copyright box
new CopyrightBox(
    'https://i.postimg.cc/d1C77Wt9/Heli9x_Labs25_trans2.png',
    'Heli9x Labs',
    '2024'
).render();