/**
 * Comes with flex
 */
const Bordered = ({className, children, ...props}: Nixix.HTMLAttributes<HTMLDivElement>): someView => {
  return (
    <div className={`rounded-full border border-border_1 flex items-center ${className}`} {...props} >
      {children}
    </div>
  )
}

const Capsule = ({className, children, ...props}: Nixix.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={`rounded-full flex items-center ${className}`} {...props} >
      {children}
    </div>
  )
}

export default Object.assign(Capsule, {
  Bordered
});