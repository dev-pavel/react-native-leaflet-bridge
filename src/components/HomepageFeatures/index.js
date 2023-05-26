import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        With our npm library for React Native, integrating Leaflet becomes a
        hassle-free experience. Just use familiar <b>L</b> object by ref.current!
      </>
    ),
  },
  {
    title: 'Full Leaflet functionality',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Unleash the full power of Leaflet in your React Native apps. Access a wide
        range of interactive map features, markers, polygons, and more for immersive map experiences.
      </>
    ),
  },
  {
    title: 'Cross-platform solution',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Achieve cross-platform map functionality effortlessly in React Native.
        Develop once and deploy seamlessly on both iOS and Android platforms.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className='text--center'>
        <Svg className={styles.featureSvg} role='img' />
      </div>
      <div className='text--center padding-horiz--md'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
