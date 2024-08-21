const SIDEBAR_SECTIONS = [
	{
		title: "Main",
		items: [
			{
				name: "Dashboard",
				icon: BarChart2,
				color: "#6366f1",
				href: "/overview",
			},
			{ name: "Calendar", icon: Users, color: "#EC4899", href: "/calendar" },
		],
	},
	{
		title: "Recruitment",
		items: [
			{ name: "Candidates", icon: Users, color: "#EC4899", href: "/users" },
			{ name: "Department", icon: DollarSign, color: "#10B981", href: "/department" },

		],
	},
	{
		title: "Reference",
		items: [
			{ name: "Products", icon: ShoppingBag, color: "#8B5CF6", href: "/products" },
			{ name: "Sales", icon: DollarSign, color: "#10B981", href: "/sales" },
			{ name: "Orders", icon: ShoppingCart, color: "#F59E0B", href: "/orders" },
			{ name: "Analytics", icon: TrendingUp, color: "#3B82F6", href: "/analytics" },
		],
	},
	{
		title: "Account",
		items: [
			{ name: "Settings", icon: Settings, color: "#6EE7B7", href: "/settings" },
			{ name: "Logout", icon: LogOut, color: "#6EE7B7", href: "/logout" },
		],
	},
];

import {
	BarChart2,
	DollarSign,
	LogOut,
	Menu,
	PersonStandingIcon,
	Settings,
	ShoppingBag,
	ShoppingCart,
	TrendingUp,
	Users,
	ChevronUp,
	ChevronDown,
} from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const Sidebar = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);
	const [isReferenceOpen, setReferenceOpen] = useState(false);

	const toggleReferenceSubmenu = () => {
		setReferenceOpen(!isReferenceOpen);
	};

	return (
		<motion.div
			className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 overflow-x hidden${
				isSidebarOpen ? "w-64" : "w-20"
			}`}
			initial={{ width: isSidebarOpen ? 256 : 80 }}
			animate={{ width: isSidebarOpen ? 256 : 80 }}
		>
			<div className='h-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700 overflow-hidden'>
			<h1 className="text-lg font-semibold">HR Dashboard</h1>
				<motion.button
				
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					onClick={() => setIsSidebarOpen(!isSidebarOpen)}
					className='p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit'
				>
					<Menu size={24} />
				</motion.button>

				<nav className='mt-8 flex-grow overflow-y-auto'>
					{SIDEBAR_SECTIONS.map((section) => (
						<div key={section.title}>
							<AnimatePresence>
								{isSidebarOpen && (
									<motion.div
										className='text-gray-400 uppercase text-xs font-semibold mb-4'
										initial={{ opacity: 0, y: -10 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -10 }}
										transition={{ duration: 0.2 }}
									>
										{section.title}
									</motion.div>
								)}
							</AnimatePresence>

							{section.title === "Reference" ? (
								<li>
									<div
										className={`flex items-center cursor-pointer p-2 rounded-lg mr-3 mb-1 transition-colors duration-300 ${
											isReferenceOpen || !isSidebarOpen ? 'bg-blue-400' : 'hover:bg-blue-300'
										}`}
										onClick={toggleReferenceSubmenu}
									>
										<span className="text-lg text-accent mr-1">📚</span> {/* Use an appropriate icon */}
										{isSidebarOpen && (
											<span className="text-sm text-primary">Reference</span>
										)}
										{isSidebarOpen && (
											<div className="ml-auto">
												{isReferenceOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
											</div>
										)}
									</div>
									{(isReferenceOpen && isSidebarOpen) && (
										<ul className="pl-4">
											{section.items.map((item) => (
												<Link key={item.href} to={item.href}>
													<motion.div
														className={`flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2`}
														initial={{ opacity: 1 }}
													>
														<item.icon size={20} style={{ color: item.color, minWidth: "20px" }} />
														<AnimatePresence>
															{isSidebarOpen && (
																<motion.span
																	className='ml-4 whitespace-nowrap overflow-hidden'
																	initial={{ opacity: 0, width: 0 }}
																	animate={{ opacity: 1, width: "auto" }}
																	exit={{ opacity: 0, width: 0 }}
																	transition={{ duration: 0.2, delay: 0.3 }}
																>
																	{item.name}
																</motion.span>
															)}
														</AnimatePresence>
													</motion.div>
												</Link>
											))}
										</ul>
									)}
								</li>
							) : (
								section.items.map((item) => (
									<Link key={item.href} to={item.href}>
										<motion.div
											className={`flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2`}
											initial={{ opacity: 1 }}
										>
											<item.icon size={20} style={{ color: item.color, minWidth: "20px" }} />
											<AnimatePresence>
												{isSidebarOpen && (
													<motion.span
														className='ml-4 whitespace-nowrap overflow-hidden'
														initial={{ opacity: 0, width: 0 }}
														animate={{ opacity: 1, width: "auto" }}
														exit={{ opacity: 0, width: 0 }}
														transition={{ duration: 0.2, delay: 0.3 }}
													>
														{item.name}
													</motion.span>
												)}
											</AnimatePresence>
										</motion.div>
									</Link>
								))
							)}
						</div>
					))}
				</nav>
			</div>
		</motion.div>
	);
};

export default Sidebar;
