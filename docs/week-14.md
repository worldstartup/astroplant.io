![image](https://raw.githubusercontent.com/Meet-Miles/astroplant/master/docs/images/week-14.png)

Thank you for taking the time to read this week's update. As you can see in the following table, I have a couple of activities planned that I will do in order to get my desired result: Refactoring.

| Activities          | Finalized |
| :------------------ | :-------: |
| Cleaning some props |    ✅     |

# Cleaning some props

Now that I have finalizd the website, I jumped back in and tried to make a few components a bit more reusable and clean.

## Spacer

```javascript
export function Spacer(props = { height }) {
    return <div style={{ height: props.height }}></div>;
}
```

This component was used to create spacing between the sections. However, I noticed that near the footer of the website, I needed a background color on this component. I added that:

```javascript
export function Spacer(props = { height, bgColor }) {
    return <div style={{ height: props.height, backgroundColor: props.bgColor }}></div>;
}
```

Now I was able to add a background color easily!

## Spacer

```javascript
import s from "./modules/Button.module.css";
import Link from "next/link";

export function Button(
    props = {
        label,
    }
) {
    return <button className={s.button}>{props.label}</button>;
}
```

As you can see in this component I was fully dependent on the `.css` styling. However, when calling the button, I wanted to be able to tweak certain things for that instance.

To achieve this I added the extra props and turned the component into this:

```javascript
import s from "./modules/Button.module.css";
import Link from "next/link";

export function Button(
    props = {
        label,
        bgColor,
        color,
        href,
    }
) {
    return (
        <Link href={`#` + props.href}>
            <button
                className={s.button}
                style={{ backgroundColor: props.bgColor, color: props.color }}
            >
                {props.label}
            </button>
        </Link>
    );
}
```

Now I could specify a link, a background color and a text color, giving me the change to create any type of button when calling it!

---

This week has been a very informative and exciting week. I can't wait to jump into next [week](https://github.com/Meet-Miles/astroplant/blob/master/docs/week-15.md) and finally deploy the website!. It's going to be exciting!

# Resources

| Resource                                                          | Note                                         |
| :---------------------------------------------------------------- | :------------------------------------------- |
| [React props](https://reactjs.org/docs/components-and-props.html) | Used to learn more about the props in React. |
