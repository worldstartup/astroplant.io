import s from "./modules/ImageGrid.module.css";

export function ImageGrid() {
    return (
        <div className={s.imageGrid}>
            <img className={`${s.gridImage} ${s.img1}`} src='/images/grid-1.png' />
            <img className={`${s.gridImage} ${s.img2}`} src='/images/grid-2.png' />
            <img className={`${s.gridImage} ${s.img3}`} src='/images/grid-3.png' />
            <img className={`${s.gridImage} ${s.img4}`} src='/images/grid-4.png' />
            <img className={`${s.gridImage} ${s.img5}`} src='/images/grid-5.png' />
            <img className={`${s.gridImage} ${s.img6}`} src='/images/grid-6.png' />
            <img className={`${s.gridImage} ${s.img7}`} src='/images/grid-7.png' />
            <img className={`${s.gridImage} ${s.img8}`} src='/images/grid-8.png' />
        </div>
    );
}
