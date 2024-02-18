const s = [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
      element: "Admin dashboard",
    },
    {
      name: "User Management",
      children: [
        {
          name: "Create Student",
          path: "/admin/create-student",
          element: "create_student",
        },
        {
          name: "Create Admin",
          path: "/admin/create-admin",
          element: "create_admin",
        },
        {
          name: "Create Faculty",
          path: "/admin/create-faculty",
          element: "create_faculty",
        },
      ],
    },
  ]
  const result = s.reduce((acc , item) => {
    const sa = acc.push(item)
    return acc
}, [])
  console.log(result)

