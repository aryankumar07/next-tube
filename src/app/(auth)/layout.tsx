interface LayoutProps {
  children: React.ReactNode
}


const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      {children}
    </div>
  )
}


export default Layout
