import { ReactSVG } from 'react-svg'

export default function Icon({
  src,
  height,
  width,
  fill,
  title,
  className,
}: {
  src: string
  height?: string
  width?: string
  fill?: string
  title?: string
  className?: string
}) {
  return (
    <ReactSVG
      beforeInjection={(svg) => {
        svg.classList.add('svg-class-name')
        if (width) svg.setAttribute('width', width)
        if (height) svg.setAttribute('height', height)
        if (fill) svg.setAttribute('fill', fill)
        if (className) svg.setAttribute('className', className)
        svg.setAttribute('title', title || 'icon')
      }}
      src={src}
    />
  )
}
