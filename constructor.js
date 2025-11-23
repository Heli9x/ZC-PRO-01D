class Header{
    constructor(brand, heading, links, fcc, data={}){
        this.data = data;
        this.main = document.createElement("header");
        this.main.classList += "hero-section";
        this.brand = brand
        this.heading = heading;
        this.links = Object.fromEntries(links);
        this.fcc = Object.fromEntries(fcc);
        
        /*
            example of fcc object (featured content cards)
            fcc = {"<card-name>": "<image-URL>"1, ..."<card-name>": "<image-URL>"n}
            links = {"<link-name>": "<link-URL>"1, ..."<link-name>": "<link-URL>"n}
        */
        }

    render(){

        this.data.image? this.main.setAttribute("style",`background-image: url(${this.data.image});`):"";
        //create brand logo
        const brand = document.createElement('span');
        brand.innerHTML = this.brand;
        brand.classList += "brand";

        //create navbar
        const navbar = document.createElement('nav');
        navbar.classList += "top-nav";
        const linkContainer = document.createElement('div');
        linkContainer.classList += "nav-icons";
        Object.keys(this.links).forEach(name => {
            linkContainer.innerHTML += (`
                <span class="icon">
                    <a href="${this.links[name]}">
                        <i class="ri-${name}-fill"></i>
                    </a>
                </span>
                `)
        });

        //append children
        navbar.appendChild(brand);
        navbar.appendChild(linkContainer);
        this.main.appendChild(navbar);

        const heading = document.createElement('div');
        heading.classList += "hero-content";

        const headingTitleShadow = document.createElement('div');
        headingTitleShadow.classList += "big-z-graphic";
        headingTitleShadow.innerHTML = this.brand[0];

        const headingTitle = document.createElement('h1');
        headingTitle.innerHTML = this.heading;

        const featuredContentList = document.createElement("div");
        featuredContentList.classList += "hero-collage";
        Object.keys(this.fcc).forEach(card =>{
            featuredContentList.innerHTML += `
                <div class="collage-item mobile-only" style="background-image: url(${this.fcc[card]});">
                    <div class="hide showonhover">${card}</div>
                </div>
                `
        })

        heading.appendChild(headingTitleShadow);
        heading.appendChild(headingTitle);
        heading.appendChild(featuredContentList);
        this.main.appendChild(heading);

        return this.main;
    }
}

class FeatureBanner{
    constructor(data){
        this.main = document.createElement("section");
        this.main.classList += "feature-banner";
        this.data = data;
        /*
            example of data object
            data = {
                title:"",
                subtitle:"",
                description:"",
                banner:{
                    image:"<image-URL>",
                    title:"",
                    subtitle: "",
                }
            }
        */
    }

    render(){
        const featureText = document.createElement("div");
        featureText.classList += "feature-text";

        featureText.innerHTML = `
            <span class="subtitle">${this.data.subtitle}</span>
            <h2>${this.data.title}</h2>
        `;

        const featureContent = document.createElement("div");
        featureContent.classList += "feature-image-wrapper";

        featureContent.innerHTML =`
            <div class="img-placeholder">
                <img src=${this.data.banner.image} alt="no-image">
            </div>
            <div class="feature-meta">
                <span class="title">${this.data.banner.title}</span>
                <span class="desc">${this.data.banner.subtitle}</span>
            </div>
        `;

        this.main.appendChild(featureText);
        this.main.appendChild(featureContent);

        // Add click event to open feature modal if description exists
        if(this.data.description) {
            this.main.style.cursor = "pointer";
            this.main.addEventListener('click', () => {
                FeatureModal.open(this.data.title, this.data.description, this.data.banner.image);
            });
        }

        return this.main;

    }
}


class HeroSection{
    constructor(data){
        this.main = document.createElement("section");
        this.main.classList += "heroes-section";
        this.data = data;
        /*
            example of data object
            data = {
                sectionHeader:{
                    title: "Heroes"
                }
                sectionGrid:{
                    "hero-name":{
                        image: "<image-url>",
                        yaer:"2019",
                        theme: "<color>"
                    },
                    ... more objects like hero-name...
                }
            }
        */
    }

    render(){
        const sectionHeader = document.createElement("div");
        sectionHeader.classList += "section-header";
        sectionHeader.innerHTML = `
            <div class="section-header">
                <h3>${this.data.sectionHeader.title}</h3>
            </div>
        `;

        const sectionGrid = document.createElement("div");
        sectionGrid.classList += "section-grid";
        Object.keys(this.data.sectionGrid).forEach(card =>{
            const cardElement = document.createElement('article');
            cardElement.className = `char-card card-${this.data.sectionGrid[card].theme}`;
            cardElement.innerHTML = `
                <div class="char-img">
                    <img src="${this.data.sectionGrid[card].image}" alt="${card}" >
                </div>
                <span class="char-name">${card}</span>
                <span class="char-id">${this.data.sectionGrid[card].year}</span>
            `;
            
            cardElement.addEventListener('click', () => {
                ImageModal.open(this.data.sectionGrid[card].image, card);
            });
            
            sectionGrid.appendChild(cardElement);
        })

        this.main.appendChild(sectionHeader);
        this.main.appendChild(sectionGrid);
        return this.main;

    }
}

class AnnouncementSection{
    constructor(data){
        this.main = document.createElement("section");
        this.main.classList += "announcement-section";
        this.data = data;
        /*
            example of data object
            data = {
                title: "",
                description: "",
                buttonText: ""
            }
        */
    }

    render(){
        const announcementContainer = document.createElement("div");
        announcementContainer.classList += "announcement-content";

        announcementContainer.innerHTML = `
            <h3>${this.data.title}</h3>
            <p>${this.data.description}</p>
            <a href="${this.data.link}"><button class="btn-outline">${this.data.buttonText}</button></a>
        `;

        this.main.appendChild(announcementContainer);
        return this.main;

    }
}

class ImageModal{
    constructor(imageSrc, title=""){
        this.imageSrc = imageSrc;
        this.title = title;
        this.main = document.createElement("div");
        this.main.classList += "image-modal";
        this.main.id = "imageModal";
    }

    render(){
        this.main.innerHTML = `
            <div class="modal-overlay"></div>
            <div class="modal-content">
                <button class="modal-close">×</button>
                <div class="modal-body">
                    <img src="${this.imageSrc}" alt="${this.title}" class="modal-image">
                    ${this.title ? `<p class="modal-title">${this.title}</p>` : ''}
                </div>
            </div>
        `;

        const closeBtn = this.main.querySelector('.modal-close');
        const overlay = this.main.querySelector('.modal-overlay');

        const closeModal = () => this.close();

        closeBtn.addEventListener('click', closeModal);
        overlay.addEventListener('click', closeModal);

        document.body.appendChild(this.main);
        
        return this.main;
    }

    close(){
        if(this.main.parentNode){
            this.main.remove();
        }
    }

    static open(imageSrc, title=""){
        const modal = new ImageModal(imageSrc, title);
        modal.render();
    }
}

class FeatureModal{
    constructor(title, description, imageSrc){
        this.title = title;
        this.description = description;
        this.imageSrc = imageSrc;
        this.main = document.createElement("div");
        this.main.classList += "feature-modal";
    }

    render(){
        this.main.innerHTML = `
            <div class="feature-modal-overlay"></div>
            <div class="feature-modal-content" style="background-image: url(${this.imageSrc});">
                <div class="feature-modal-backdrop"></div>
                <button class="feature-modal-close">×</button>
                <div class="feature-modal-body">
                    <h2 class="feature-modal-title">${this.title}</h2>
                    <p class="feature-modal-description">${this.description}</p>
                </div>
            </div>
        `;

        const closeBtn = this.main.querySelector('.feature-modal-close');
        const overlay = this.main.querySelector('.feature-modal-overlay');

        const closeModal = () => this.close();

        closeBtn.addEventListener('click', closeModal);
        overlay.addEventListener('click', closeModal);

        document.body.appendChild(this.main);
        
        return this.main;
    }

    close(){
        if(this.main.parentNode){
            this.main.remove();
        }
    }

    static open(title, description, imageSrc){
        const modal = new FeatureModal(title, description, imageSrc);
        modal.render();
    }
}

class CopyrightBox{
    constructor(logoSrc, companyName, year="2024"){
        this.logoSrc = logoSrc;
        this.companyName = companyName;
        this.year = year;
        this.main = document.createElement("div");
        this.main.classList += "copyright-box";
    }

    render(){
        this.main.innerHTML = `
            <div class="copyright-content">
                <img src="${this.logoSrc}" alt="${this.companyName}" class="copyright-logo">
                <div class="copyright-text">
                    <p class="copyright-company">${this.companyName}</p>
                    <p class="copyright-year">© ${this.year}</p>
                </div>
            </div>
        `;

        document.body.appendChild(this.main);
        
        return this.main;
    }
}

