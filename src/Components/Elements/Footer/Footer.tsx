const FooterComponent: React.FC = () => {
  const date = new Date()
  const currentYear: number = date.getFullYear()
  return (
    <>
      <footer className="fixed bottom-0 w-full bg-slate-100 text-center text-sm opacity-30">
        <small>Copyright &copy; {currentYear}. All right reserved by Beno</small>
      </footer>
    </>
  )
}

export default FooterComponent
