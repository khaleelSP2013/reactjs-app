// const DashboardLayout = ({
//     children,
//     users,
//     revenue,
//     notifications
// }:
// {
//     children:React.ReactNode;
//     users:React.ReactNode;
//     notifications:React.ReactNode;
//     revenue:React.ReactNode;
// }) => {
//   return (
//     <>
//       {children}
//       <div style={{ display: "flex" }}>
//         <div style={{ display: "flex", flexDirection: "column" }}>
//           <div>{users}</div>
//           <div>{revenue}</div>
//         </div>
//         <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
//       </div>
//     </>
//   )
// }

// export default DashboardLayout
export default function ComplexDashboardLayout({
    children,
    users,
    revenue,
    notifications,
    login,
    
  }: {
    children: React.ReactNode;
    users: React.ReactNode;
    revenue: React.ReactNode;
    notifications: React.ReactNode;
    login:React.ReactNode;
   
  }) {
    const isLoggedIn=true;

    return isLoggedIn ?(
      <div>
        <h1>{children}</h1>
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>{users}</div>
            <div>{revenue}</div>
          </div>
          <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
        </div>
      </div>
    ) :(
        login
    )
  }