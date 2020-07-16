
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
    .item-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>

#### Default

```tsx
import AnimatedSocialIcon from "./icon";

<div style={{display:"flex", flexDirection:"row"}}>
    <AnimatedSocialIcon brandName="github-alt" style={{padding: "0.5em"}}/>
    <AnimatedSocialIcon brandName="linkedin-in" style={{padding: "0.5em"}}/>
    <AnimatedSocialIcon brandName="instagram" style={{padding: "0.5em"}}/>
    <AnimatedSocialIcon brandName="dribbble" style={{padding: "0.5em"}}/>
    <AnimatedSocialIcon brandName="figma" style={{padding: "0.5em"}}/>
</div>

```

#### Sizes

```tsx
import AnimatedSocialIcon from "./icon";

<div style={{display:"flex", flexDirection:"row", alignItems:"flex-end"}}>
    <AnimatedSocialIcon brandName="github-alt" style={{padding: "1em"}}/>
    <AnimatedSocialIcon brandName="linkedin-in" width="1.5em" style={{padding: "1em"}}/>
    <AnimatedSocialIcon brandName="instagram" width="2em" style={{padding: "1em"}}/>
    <AnimatedSocialIcon brandName="dribbble" width="2.5em" style={{padding: "1em"}}/>
    <AnimatedSocialIcon brandName="figma" width="3em" style={{padding: "1em"}}/>
</div>

```

#### Colors

```tsx
import AnimatedSocialIcon from "./icon";

<div style={{display:"flex", flexDirection:"row", alignItems:"flex-end"}}>
    <AnimatedSocialIcon brandName="github-alt" width="2em" defaultColor="#b6c3d9" hoverColor="#3391e8" style={{padding: "1em"}}/>
    <AnimatedSocialIcon brandName="github-alt" width="2em" hoverColor="#e66574" style={{padding: "1em"}}/>
</div>

```
#### Animations (Hover!)

```tsx
import AnimatedSocialIcon from "./icon";

<div className="grid">
    <div className="item-wrapper">
        <AnimatedSocialIcon 
            brandName="linkedin-in"
            width="2em" 
            url="https://github.com/meko-deng/react-animated-social-icons"
            defaultColor="#D1D1D1" 
            hoverColor="black" 
            animation="bounce" />
        <p>bounce</p>
    </div>
    <div className="item-wrapper">
        <AnimatedSocialIcon 
            brandName="github-alt"
            width="2em" 
            url="https://github.com/meko-deng/react-animated-social-icons"
            defaultColor="#D1D1D1" 
            hoverColor="black" 
            animation="float" />
        <p>float</p>
    </div>
    <div className="item-wrapper">
        <AnimatedSocialIcon 
            brandName="figma"
            width="2em" 
            url="https://github.com/meko-deng/react-animated-social-icons"
            defaultColor="#D1D1D1" 
            hoverColor="black" 
            animation="sink" />
        <p>sink</p>
    </div>
    <div className="item-wrapper">
        <AnimatedSocialIcon 
            brandName="instagram"
            width="2em" 
            url="https://github.com/meko-deng/react-animated-social-icons"
            defaultColor="#D1D1D1" 
            hoverColor="black" 
            animation="grow" />
        <p>grow</p>
    </div>
    <div className="item-wrapper">
        <AnimatedSocialIcon 
            brandName="facebook"
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
import AnimatedSocialIcon from "./icon";

<div className="grid">
    <div className="item-wrapper">
        <AnimatedSocialIcon 
            brandName="github-alt"
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
            brandName="github-alt"
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
            brandName="github-alt"
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
            brandName="github-alt"
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