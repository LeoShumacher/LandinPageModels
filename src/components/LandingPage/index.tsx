export default function LandingPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col w-full h-full bg-slate-100">{children}</main>
  );
}
export function LandingPageHeader({
  children,
  logo,
}: {
  children: React.ReactNode;
  logo: React.ReactNode;
}) {
  return (
    <header className="flex items-center justify-between px-3 w-full h-12 border-b border-slate-300">
      <p>{logo}</p>
      {children}
    </header>
  );
}
export function LandingPageHeaderNav({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
export function LandingPageMainContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex flex-col w-full h-full">{children}</div>;
}
export function LandingPageSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="w-full flex h-96 bg-slate-200 items-center justify-center">{children}</section>;
}

export function LandingPageIconCarrousel({children}: {children: React.ReactNode}) {
    return <div className="w-full h-32 bg-slate-300">{children}</div>
}