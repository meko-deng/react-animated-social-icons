
<style>
    p {
        margin:0;
        padding-top: 0.7em;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
        color: #37404f;
    }
    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        row-gap: 30px;
        max-width: 600px;
        width: 100%;
    }
    .icon-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        row-gap: 10px;
        max-width: 800px;
        width: 100%;
    }
    .item-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>

#### Icons

```tsx
import {AnimatedSocialIcon} from 'react-animated-social-icons';

const Icon = (name) => {
    return (
        <div className="item-wrapper">
            <AnimatedSocialIcon brandName={name} width="2.5em" style={{padding: "1em"}}/>
        </div>
    )
}

<div className="icon-grid">
    {Icon("angelist")}
    {Icon("behance")}
    {Icon("blogger")}
    {Icon("codepen")}
    {Icon("deviantart")}
    {Icon("discord")}
    {Icon("dribbble")}
    {Icon("dribbbleAlt")}
    {Icon("facebook")}
    {Icon("facebookAlt")}
    {Icon("github")}
    {Icon("githubAlt")}
    {Icon("gofundme")}
    {Icon("goodreads")}
    {Icon("googlePlay")}
    {Icon("instagram")}
    {Icon("kickstarter")}
    {Icon("linkedin")}
    {Icon("medium")}
    {Icon("mediumAlt")}
    {Icon("meetup")}
    {Icon("patreon")}
    {Icon("pinterest")}
    {Icon("productHunt")}
    {Icon("reddit")}
    {Icon("skillshare")}
    {Icon("slack")}
    {Icon("slackAlt")}
    {Icon("snapchat")}
    {Icon("soundCloud")}
    {Icon("spotify")}
    {Icon("stackOverflow")}
    {Icon("steam")}
    {Icon("tumblr")}
    {Icon("twitch")}
    {Icon("twitter")}
    {Icon("twitterAlt")}
    {Icon("vimeo")}
    {Icon("weibo")}
    {Icon("wordpress")}
    {Icon("yelp")}
    {Icon("youtube")}
</div>

```
#### Default

```tsx
import {AnimatedSocialIcon} from 'react-animated-social-icons';

<div style={{display:"flex", flexDirection:"row"}}>
    <AnimatedSocialIcon brandName="github" style={{padding: "0.5em"}}/>
    <AnimatedSocialIcon brandName="linkedin" style={{padding: "0.5em"}}/>
    <AnimatedSocialIcon brandName="instagram" style={{padding: "0.5em"}}/>
    <AnimatedSocialIcon brandName="dribbbleAlt" style={{padding: "0.5em"}}/>
    <AnimatedSocialIcon brandName="youtube" style={{padding: "0.5em"}}/>
</div>

```

#### Sizes

```tsx
import {AnimatedSocialIcon} from 'react-animated-social-icons';

<div style={{display:"flex", flexDirection:"row", alignItems:"flex-end"}}>
    <AnimatedSocialIcon brandName="github" style={{padding: "1em"}}/>
    <AnimatedSocialIcon brandName="linkedin" width="1.5em" style={{padding: "1em"}}/>
    <AnimatedSocialIcon brandName="instagram" width="2em" style={{padding: "1em"}}/>
    <AnimatedSocialIcon brandName="dribbbleAlt" width="2.5em" style={{padding: "1em"}}/>
    <AnimatedSocialIcon brandName="youtube" width="3em" style={{padding: "1em"}}/>
</div>

```

#### Colors

```tsx
import {AnimatedSocialIcon} from 'react-animated-social-icons';

<div style={{display:"flex", flexDirection:"row", alignItems:"flex-end"}}>
    <AnimatedSocialIcon brandName="github" width="2em" defaultColor="#b6c3d9" hoverColor="#3391e8" style={{padding: "1em"}}/>
    <AnimatedSocialIcon brandName="github" width="2em" hoverColor="#e66574" style={{padding: "1em"}}/>
</div>

```

#### Animations (Hover!)

```tsx
import {AnimatedSocialIcon} from 'react-animated-social-icons';

<div className="grid">
    <div className="item-wrapper">
        <AnimatedSocialIcon 
            brandName="github"
            width="2em" 
            url="https://github.com/meko-deng/react-animated-social-icons"
            defaultColor="#D1D1D1" 
            hoverColor="black" 
            animation="bounce" />
        <p>bounce</p>
    </div>
    <div className="item-wrapper">
        <AnimatedSocialIcon 
            brandName="linkedin"
            width="2em" 
            url="https://github.com/meko-deng/react-animated-social-icons"
            defaultColor="#D1D1D1" 
            hoverColor="black" 
            animation="float" />
        <p>float</p>
    </div>
    <div className="item-wrapper">
        <AnimatedSocialIcon 
            brandName="instagram"
            width="2em" 
            url="https://github.com/meko-deng/react-animated-social-icons"
            defaultColor="#D1D1D1" 
            hoverColor="black" 
            animation="sink" />
        <p>sink</p>
    </div>
    <div className="item-wrapper">
        <AnimatedSocialIcon 
            brandName="dribbbleAlt"
            width="2em" 
            url="https://github.com/meko-deng/react-animated-social-icons"
            defaultColor="#D1D1D1" 
            hoverColor="black" 
            animation="grow" />
        <p>grow</p>
    </div>
    <div className="item-wrapper">
        <AnimatedSocialIcon 
            brandName="youtube"
            width="2em" 
            url="https://github.com/meko-deng/react-animated-social-icons"
            defaultColor="#D1D1D1" 
            hoverColor="black" 
            animation="shrink" />
        <p>shrink</p>
    </div>

</div>
```

#### Animation Duration

```tsx
import {AnimatedSocialIcon} from 'react-animated-social-icons';

<div className="grid">
    <div className="item-wrapper">
        <AnimatedSocialIcon 
            brandName="github"
            width="2em" 
            url="https://github.com/meko-deng/react-animated-social-icons"
            defaultColor="#D1D1D1" 
            hoverColor="black" 
            animation="bounce" 
            animationDuration={0.3}/>
        <p>0.3s</p>
    </div>
    <div className="item-wrapper">
        <AnimatedSocialIcon 
            brandName="github"
            width="2em" 
            url="https://github.com/meko-deng/react-animated-social-icons"
            defaultColor="#D1D1D1" 
            hoverColor="black" 
            animation="bounce"
            animationDuration={0.5}/>
        <p>0.5s (default)</p>
    </div>
    <div className="item-wrapper">
        <AnimatedSocialIcon 
            brandName="github"
            width="2em" 
            url="https://github.com/meko-deng/react-animated-social-icons"
            defaultColor="#D1D1D1" 
            hoverColor="black" 
            animation="bounce"
            animationDuration={0.8}/>
        <p>0.8s</p>
    </div>
    <div className="item-wrapper">
        <AnimatedSocialIcon 
            brandName="github"
            width="2em" 
            url="https://github.com/meko-deng/react-animated-social-icons"
            defaultColor="#D1D1D1" 
            hoverColor="black" 
            animation="bounce"
            animationDuration={1}/>
        <p>1s</p>
    </div>

</div>
```