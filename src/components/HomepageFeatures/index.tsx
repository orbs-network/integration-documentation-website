import clsx from 'clsx'
import Heading from '@theme/Heading'
import styles from './styles.module.css'

type FeatureItem = {
  title: string
  Svg: React.ComponentType<React.ComponentProps<'svg'>>
  description: JSX.Element
}

const FeatureList: FeatureItem[] = [
  {
    title: 'Liquidity Hub',
    Svg: require('@site/static/img/liquidity-hub-logo.svg').default,
    description: (
      <>
        Decentralized optimization layer for DEXs enabling DEXs to tap into
        external liquidity sources in order to provide CeFi-competitive prices
        on swaps.
      </>
    ),
  },
  {
    title: 'dTWAP',
    Svg: require('@site/static/img/dtwap-logo.svg').default,
    description: (
      <>
        Advanced order type for DEXs allowing for time-based orders to be
        executed on chain.
      </>
    ),
  },
  {
    title: 'dLIMIT',
    Svg: require('@site/static/img/dlimit-logo.svg').default,
    description: (
      <>
        Advanced order type for DEXs allowing for limit orders to be executed on
        chain.
      </>
    ),
  },
]

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
