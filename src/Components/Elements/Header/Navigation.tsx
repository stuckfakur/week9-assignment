interface NavHeaderProps {
  children: string
}
const NavHeader: React.FC<NavHeaderProps> = ({ children }) => {
  return (
    <div className="sticky top-0 z-40 flex h-12 w-full items-center justify-center bg-slate-300 shadow">
      <p className="text-xl font-bold text-slate-600">{children}</p>
    </div>
  )
}

export default NavHeader
