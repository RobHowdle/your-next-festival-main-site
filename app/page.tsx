"use client";

import {useState, useEffect} from "react";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
	faTent,
	faMagnifyingGlass,
	faCalendarCheck,
	faScrewdriverWrench,
	faCalendarDays,
	faBolt,
	faPalette,
	faStore,
	faMusic,
	faTicket,
	faHardHat,
	faGear,
	faLocationDot,
	faCalendar,
} from "@fortawesome/free-solid-svg-icons";

const NAV_ITEMS = ["About", "Festivals", "Features", "Platform", "Demo"];

const FESTIVALS = [
	{
		name: "Glastonbury 2025",
		date: "Jun 25–29, 2025",
		location: "Pilton, Somerset",
		status: "Coming Soon",
		statusColor: "#7c3aed",
		img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=400&fit=crop&auto=format",
	},
	{
		name: "Reading & Leeds",
		date: "Aug 22–24, 2025",
		location: "Reading & Leeds, UK",
		status: "Tickets Available",
		statusColor: "#059669",
		img: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&h=400&fit=crop&auto=format",
	},
	{
		name: "Download Festival",
		date: "Jun 12–14, 2025",
		location: "Donington Park",
		status: "Coming Soon",
		statusColor: "#7c3aed",
		img: "https://images.unsplash.com/photo-1563841930606-67e2bce48b78?w=600&h=400&fit=crop&auto=format",
	},
];

const PLATFORM_FEATURES = [
	{
		id: "schedule",
		label: "Personalised Schedule",
		icon: faCalendarDays,
		title: "Build Your Perfect Day",
		desc: "Let attendees save their favorite artists, organise their own timetable, and switch between lineup views to see exactly what is happening and when.",
	},
	{
		id: "clashes",
		label: "Smart Clash Alerts",
		icon: faBolt,
		title: "Never Miss What Matters",
		desc: "Automatically highlight clashes between artists people care about most, with smart recommendations to help them decide what to see next.",
	},
	{
		id: "weather",
		label: "Festival Weather",
		icon: faLocationDot,
		title: "Plan Around the Forecast",
		desc: "Show live weather updates for the festival dates so attendees can pack smarter and plan their day with confidence.",
	},
	{
		id: "vendors",
		label: "Food & Vendor Finder",
		icon: faStore,
		title: "Find What You Need Fast",
		desc: "Help attendees discover vendors by area and quickly browse food, drink, and on-site essentials without digging through the full schedule.",
	},
	{
		id: "music",
		label: "Playlist Generation",
		icon: faMusic,
		title: "Discover the Lineup Through Music",
		desc: "Connect streaming accounts to surface artists, build hype before arrival, and generate playlists from the festival lineup.",
	},
];

const EXPERIENCE_ITEMS = [
	{
		icon: faTent,
		title: "Unified Platform",
		desc: "Everything in one place — for organisers, vendors, staff, and attendees.",
	},
	{
		icon: faMagnifyingGlass,
		title: "Discover Festivals",
		desc: "Browse events across the UK and beyond, filtered to your taste.",
	},
	{
		icon: faCalendarCheck,
		title: "Smart Planning",
		desc: "Build clash-free schedules and share them with your crew before gates open.",
	},
	{
		icon: faScrewdriverWrench,
		title: "Management Tools",
		desc: "Powerful back-office tools that scale from boutique events to 100k+ capacity.",
	},
];

const DEMO_ROLES = [
	{
		role: "Standard User",
		slug: "user",
		icon: faTicket,
		desc: "Discover festivals, build your schedule, and manage your experience as an attendee.",
		bg: "rgba(124,58,237,0.15)",
		border: "rgba(167,139,250,0.5)",
		btnBg: "#7c3aed",
		hoverBorder: "rgba(167,139,250,0.8)",
		iconColor: "#a78bfa",
	},
	{
		role: "Vendor",
		slug: "vendor",
		icon: faStore,
		desc: "Apply for pitches, manage inventory, and coordinate with festival organisers.",
		bg: "rgba(8,145,178,0.12)",
		border: "rgba(34,211,238,0.35)",
		btnBg: "#0891b2",
		hoverBorder: "rgba(34,211,238,0.7)",
		iconColor: "#22d3ee",
	},
	{
		role: "Staff",
		slug: "staff",
		icon: faHardHat,
		desc: "View rosters, manage check-ins, and coordinate operations across the site.",
		bg: "rgba(5,150,105,0.12)",
		border: "rgba(52,211,153,0.35)",
		btnBg: "#059669",
		hoverBorder: "rgba(52,211,153,0.7)",
		iconColor: "#34d399",
	},
	{
		role: "Admin",
		slug: "admin",
		icon: faGear,
		desc: "Full control over festival setup, user management, and real-time analytics.",
		bg: "rgba(220,38,38,0.12)",
		border: "rgba(248,113,113,0.35)",
		btnBg: "#dc2626",
		hoverBorder: "rgba(248,113,113,0.7)",
		iconColor: "#f87171",
	},
];

const BARLOW = "var(--font-barlow), 'Barlow Condensed', sans-serif";

export default function HomePage() {
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const [activeFeature, setActiveFeature] = useState(PLATFORM_FEATURES[0].id);
	const [demoHover, setDemoHover] = useState<string | null>(null);
	const [festHover, setFestHover] = useState<string | null>(null);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 60);
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const scrollTo = (id: string) => {
		document.getElementById(id)?.scrollIntoView({behavior: "smooth"});
		setMenuOpen(false);
	};

	const currentFeature = PLATFORM_FEATURES.find(
		(f) => f.id === activeFeature,
	)!;

	return (
		<div
			style={{
				background: "#060612",
				color: "#f8fafc",
				overflowX: "hidden",
				minHeight: "100vh",
			}}>
			{/* NAV */}
			<nav
				style={{
					position: "fixed",
					top: 0,
					left: 0,
					right: 0,
					zIndex: 100,
					height: "64px",
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					padding: "0 clamp(1rem, 5vw, 4rem)",
					background: scrolled ? "rgba(6,6,18,0.95)" : "transparent",
					backdropFilter: scrolled ? "blur(14px)" : "none",
					borderBottom: scrolled
						? "1px solid rgba(124,58,237,0.2)"
						: "none",
					transition: "background 0.3s, border-color 0.3s",
				}}>
				<button
					onClick={() => scrollTo("hero")}
					style={{
						background: "none",
						border: "none",
						cursor: "pointer",
						padding: 0,
						fontFamily: BARLOW,
						fontWeight: 800,
						fontSize: "1.35rem",
						letterSpacing: "0.06em",
						color: "#a78bfa",
						textTransform: "uppercase",
					}}>
					Your Next Festival
				</button>

				<div
					style={{display: "flex", gap: "2rem", alignItems: "center"}}
					className="ynf-desktop-nav">
					{NAV_ITEMS.map((item) => (
						<button
							key={item}
							onClick={() =>
								item === "Demo"
									? scrollTo("demo")
									: scrollTo(item.toLowerCase())
							}
							style={{
								background: "none",
								border: "none",
								color: "#94a3b8",
								fontSize: "0.8rem",
								letterSpacing: "0.1em",
								fontWeight: 600,
								cursor: "pointer",
								textTransform: "uppercase",
								fontFamily: "inherit",
								transition: "color 0.2s",
								padding: "0.25rem 0",
							}}
							onMouseEnter={(e) =>
								(e.currentTarget.style.color = "#a78bfa")
							}
							onMouseLeave={(e) =>
								(e.currentTarget.style.color = "#94a3b8")
							}>
							{item}
						</button>
					))}
					<button
						onClick={() => scrollTo("demo")}
						style={{
							background: "#7c3aed",
							color: "#fff",
							border: "none",
							borderRadius: "7px",
							padding: "0.5rem 1.25rem",
							fontSize: "0.8rem",
							fontWeight: 700,
							cursor: "pointer",
							letterSpacing: "0.06em",
							textTransform: "uppercase",
							fontFamily: "inherit",
							transition: "background 0.2s, transform 0.15s",
						}}
						onMouseEnter={(e) => {
							e.currentTarget.style.background = "#6d28d9";
							e.currentTarget.style.transform =
								"translateY(-1px)";
						}}
						onMouseLeave={(e) => {
							e.currentTarget.style.background = "#7c3aed";
							e.currentTarget.style.transform = "translateY(0)";
						}}>
						Try Demo
					</button>
				</div>

				<button
					onClick={() => setMenuOpen(!menuOpen)}
					className="ynf-mobile-nav"
					style={{
						background: "none",
						border: "none",
						color: "#f8fafc",
						fontSize: "1.4rem",
						cursor: "pointer",
						padding: "0.25rem",
						lineHeight: 1,
					}}
					aria-label="Menu">
					{menuOpen ? "✕" : "☰"}
				</button>
			</nav>

			{menuOpen && (
				<div
					style={{
						position: "fixed",
						top: "64px",
						left: 0,
						right: 0,
						zIndex: 99,
						background: "rgba(6,6,18,0.97)",
						backdropFilter: "blur(14px)",
						borderBottom: "1px solid rgba(124,58,237,0.2)",
						padding: "1.5rem clamp(1rem, 5vw, 4rem)",
						display: "flex",
						flexDirection: "column",
						gap: "0.75rem",
					}}>
					{NAV_ITEMS.map((item) => (
						<button
							key={item}
							onClick={() => scrollTo(item.toLowerCase())}
							style={{
								background: "none",
								border: "none",
								color: "#94a3b8",
								fontSize: "1rem",
								letterSpacing: "0.1em",
								fontWeight: 600,
								cursor: "pointer",
								textTransform: "uppercase",
								fontFamily: "inherit",
								textAlign: "left",
								padding: "0.5rem 0",
							}}>
							{item}
						</button>
					))}
					<button
						onClick={() => scrollTo("demo")}
						style={{
							background: "#7c3aed",
							color: "#fff",
							border: "none",
							borderRadius: "7px",
							padding: "0.75rem 1.25rem",
							fontSize: "0.9rem",
							fontWeight: 700,
							cursor: "pointer",
							letterSpacing: "0.06em",
							textTransform: "uppercase",
							fontFamily: "inherit",
							marginTop: "0.5rem",
						}}>
						Try Demo
					</button>
				</div>
			)}

			{/* HERO */}
			<section
				id="hero"
				style={{
					position: "relative",
					minHeight: "100vh",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					textAlign: "center",
				}}>
				<div
					style={{
						position: "absolute",
						inset: 0,
						backgroundImage:
							"url(https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1920&h=1080&fit=crop&auto=format)",
						backgroundSize: "cover",
						backgroundPosition: "center top",
						filter: "brightness(0.28) saturate(1.3)",
					}}
				/>
				<div
					style={{
						position: "absolute",
						inset: 0,
						background:
							"linear-gradient(to bottom, rgba(6,6,18,0.15) 0%, rgba(6,6,18,0.55) 60%, #060612 100%)",
					}}
				/>

				<div
					style={{
						position: "relative",
						padding: "6rem clamp(1rem, 6vw, 4rem) 4rem",
						maxWidth: "900px",
						width: "100%",
					}}>
					<div
						style={{
							display: "inline-block",
							background: "rgba(124,58,237,0.18)",
							border: "1px solid rgba(167,139,250,0.35)",
							borderRadius: "100px",
							padding: "0.35rem 1.1rem",
							marginBottom: "1.75rem",
							fontSize: "0.72rem",
							letterSpacing: "0.18em",
							color: "#a78bfa",
							fontWeight: 700,
							textTransform: "uppercase",
						}}>
						Discover · Plan · Experience
					</div>

					<h1
						style={{
							fontFamily: BARLOW,
							fontWeight: 800,
							fontSize: "clamp(3.25rem, 12vw, 8.5rem)",
							lineHeight: 0.88,
							letterSpacing: "-0.01em",
							margin: "0 0 1.5rem",
							textTransform: "uppercase",
						}}>
						Your Next
						<br />
						<span
							style={{
								background:
									"linear-gradient(130deg, #c084fc 0%, #818cf8 50%, #a78bfa 100%)",
								WebkitBackgroundClip: "text",
								WebkitTextFillColor: "transparent",
							}}>
							Festival
						</span>
					</h1>

					<p
						style={{
							fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
							color: "#94a3b8",
							maxWidth: "540px",
							margin: "0 auto 2.5rem",
							lineHeight: 1.65,
						}}>
						The all-in-one platform for discovering, planning, and
						managing the UK&apos;s best music festivals — for
						attendees, vendors, and organisers alike.
					</p>

					<div
						style={{
							display: "flex",
							gap: "1rem",
							justifyContent: "center",
							flexWrap: "wrap",
						}}>
						<button
							onClick={() => scrollTo("festivals")}
							style={{
								background: "#7c3aed",
								color: "#fff",
								border: "none",
								borderRadius: "8px",
								padding: "0.9rem 2rem",
								fontSize: "1rem",
								fontWeight: 700,
								cursor: "pointer",
								letterSpacing: "0.06em",
								textTransform: "uppercase",
								fontFamily: BARLOW,
								transition: "all 0.2s",
							}}
							onMouseEnter={(e) => {
								e.currentTarget.style.background = "#6d28d9";
								e.currentTarget.style.transform =
									"translateY(-2px)";
							}}
							onMouseLeave={(e) => {
								e.currentTarget.style.background = "#7c3aed";
								e.currentTarget.style.transform =
									"translateY(0)";
							}}>
							Explore Festivals
						</button>
						<button
							onClick={() => scrollTo("demo")}
							style={{
								background: "transparent",
								color: "#a78bfa",
								border: "1px solid rgba(167,139,250,0.45)",
								borderRadius: "8px",
								padding: "0.9rem 2rem",
								fontSize: "1rem",
								fontWeight: 700,
								cursor: "pointer",
								letterSpacing: "0.06em",
								textTransform: "uppercase",
								fontFamily: BARLOW,
								transition: "all 0.2s",
							}}
							onMouseEnter={(e) => {
								e.currentTarget.style.background =
									"rgba(124,58,237,0.15)";
								e.currentTarget.style.transform =
									"translateY(-2px)";
							}}
							onMouseLeave={(e) => {
								e.currentTarget.style.background =
									"transparent";
								e.currentTarget.style.transform =
									"translateY(0)";
							}}>
							Try the Demo
						</button>
					</div>
				</div>

				<div
					style={{
						position: "absolute",
						bottom: "2rem",
						left: "50%",
						transform: "translateX(-50%)",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						gap: "0.5rem",
						color: "#334155",
						fontSize: "0.68rem",
						letterSpacing: "0.15em",
						textTransform: "uppercase",
					}}>
					<span>Scroll</span>
					<div
						style={{
							width: "1px",
							height: "40px",
							background:
								"linear-gradient(to bottom, #475569, transparent)",
						}}
					/>
				</div>
			</section>

			{/* ABOUT */}
			<section
				id="about"
				style={{
					padding: "clamp(5rem, 10vw, 9rem) clamp(1rem, 6vw, 5rem)",
					maxWidth: "1280px",
					margin: "0 auto",
				}}>
				<div
					style={{
						display: "grid",
						gridTemplateColumns:
							"repeat(auto-fit, minmax(280px, 1fr))",
						gap: "clamp(2.5rem, 6vw, 6rem)",
						alignItems: "center",
					}}>
					<div>
						<div
							style={{
								fontSize: "0.72rem",
								letterSpacing: "0.2em",
								textTransform: "uppercase",
								color: "#7c3aed",
								fontWeight: 700,
								marginBottom: "1rem",
							}}>
							About the Platform
						</div>
						<h2
							style={{
								fontFamily: BARLOW,
								fontWeight: 800,
								fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
								textTransform: "uppercase",
								lineHeight: 0.95,
								marginBottom: "1.5rem",
							}}>
							One Platform.
							<br />
							<span style={{color: "#a78bfa"}}>Every Role.</span>
						</h2>
						<p
							style={{
								color: "#94a3b8",
								lineHeight: 1.8,
								fontSize: "1.0625rem",
								marginBottom: "1.25rem",
							}}>
							Your Next Festival is built for every person in the
							festival ecosystem — from the moment an attendee
							discovers an event, to the second the last vendor
							packs up.
						</p>
						<p
							style={{
								color: "#64748b",
								lineHeight: 1.8,
								fontSize: "1rem",
								marginBottom: "2.5rem",
							}}>
							Organisers get powerful management tools. Vendors
							get streamlined coordination. Staff get clear
							rosters. Attendees get the best festival experience
							possible.
						</p>
						<div
							style={{
								display: "grid",
								gridTemplateColumns: "1fr 1fr",
								gap: "1.5rem",
							}}>
							{[
								["Multi-Role", "Built for Every Role"],
								["Free", "No Cost to Get Started"],
								["98%", "Uptime SLA"],
								["UK Based", "Built in Britain"],
							].map(([stat, label]) => (
								<div
									key={label}
									style={{
										borderLeft: "2px solid #7c3aed",
										paddingLeft: "1rem",
									}}>
									<div
										style={{
											fontFamily: BARLOW,
											fontWeight: 800,
											fontSize: "2rem",
											color: "#a78bfa",
											lineHeight: 1,
										}}>
										{stat}
									</div>
									<div
										style={{
											fontSize: "0.72rem",
											color: "#475569",
											textTransform: "uppercase",
											letterSpacing: "0.1em",
											marginTop: "0.25rem",
										}}>
										{label}
									</div>
								</div>
							))}
						</div>
					</div>

					<div style={{position: "relative"}}>
						<div
							style={{
								borderRadius: "14px",
								overflow: "hidden",
								aspectRatio: "4/3",
								background: "#0e0e28",
							}}>
							<img
								src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop&auto=format"
								alt="Festival stage with dramatic purple lighting and crowd"
								style={{
									width: "100%",
									height: "100%",
									objectFit: "cover",
									display: "block",
								}}
							/>
						</div>
						<div
							style={{
								position: "absolute",
								bottom: "-1.25rem",
								left: "-1.25rem",
								background: "#7c3aed",
								borderRadius: "10px",
								padding: "1rem 1.5rem",
								boxShadow: "0 8px 32px rgba(124,58,237,0.4)",
							}}>
							<div
								style={{
									fontFamily: BARLOW,
									fontWeight: 800,
									fontSize: "1.2rem",
									textTransform: "uppercase",
									letterSpacing: "0.04em",
								}}>
								2025 Season
							</div>
							<div
								style={{fontSize: "0.78rem", color: "#ddd6fe"}}>
								Now Live
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* FEATURED FESTIVALS */}
			<section
				id="festivals"
				style={{
					padding: "clamp(5rem, 10vw, 9rem) 0",
					background: "#08081c",
				}}>
				<div
					style={{
						padding: "0 clamp(1rem, 6vw, 5rem)",
						maxWidth: "1280px",
						margin: "0 auto",
					}}>
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "flex-end",
							marginBottom: "3rem",
							flexWrap: "wrap",
							gap: "1rem",
						}}>
						<div>
							<div
								style={{
									fontSize: "0.72rem",
									letterSpacing: "0.2em",
									textTransform: "uppercase",
									color: "#7c3aed",
									fontWeight: 700,
									marginBottom: "0.75rem",
								}}>
								Upcoming Events
							</div>
							<h2
								style={{
									fontFamily: BARLOW,
									fontWeight: 800,
									fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
									textTransform: "uppercase",
									lineHeight: 0.95,
									margin: 0,
								}}>
								Featured Festivals
							</h2>
						</div>
						<button
							style={{
								background: "none",
								border: "1px solid rgba(124,58,237,0.35)",
								color: "#a78bfa",
								borderRadius: "7px",
								padding: "0.5rem 1.25rem",
								fontSize: "0.78rem",
								fontWeight: 700,
								cursor: "pointer",
								letterSpacing: "0.08em",
								textTransform: "uppercase",
								fontFamily: "inherit",
								transition: "background 0.2s",
							}}
							onMouseEnter={(e) =>
								(e.currentTarget.style.background =
									"rgba(124,58,237,0.15)")
							}
							onMouseLeave={(e) =>
								(e.currentTarget.style.background = "none")
							}>
							View All →
						</button>
					</div>

					<div
						style={{
							display: "grid",
							gridTemplateColumns:
								"repeat(auto-fill, minmax(280px, 1fr))",
							gap: "1.5rem",
						}}>
						{FESTIVALS.map((fest) => (
							<div
								key={fest.name}
								style={{
									borderRadius: "12px",
									overflow: "hidden",
									background: "#0e0e28",
									border: `1px solid ${festHover === fest.name ? "rgba(167,139,250,0.4)" : "rgba(124,58,237,0.15)"}`,
									transition:
										"transform 0.25s, border-color 0.25s",
									transform:
										festHover === fest.name
											? "translateY(-5px)"
											: "translateY(0)",
									cursor: "pointer",
								}}
								onMouseEnter={() => setFestHover(fest.name)}
								onMouseLeave={() => setFestHover(null)}>
								<div
									style={{
										position: "relative",
										aspectRatio: "16/9",
										background: "#0e0e28",
									}}>
									<img
										src={fest.img}
										alt={fest.name}
										style={{
											width: "100%",
											height: "100%",
											objectFit: "cover",
											display: "block",
										}}
									/>
									<div
										style={{
											position: "absolute",
											top: "0.75rem",
											right: "0.75rem",
											background: fest.statusColor,
											color: "#fff",
											fontSize: "0.65rem",
											fontWeight: 700,
											letterSpacing: "0.1em",
											textTransform: "uppercase",
											borderRadius: "4px",
											padding: "0.25rem 0.65rem",
										}}>
										{fest.status}
									</div>
								</div>
								<div style={{padding: "1.25rem"}}>
									<h3
										style={{
											fontFamily: BARLOW,
											fontWeight: 700,
											fontSize: "1.3rem",
											margin: "0 0 0.6rem",
											letterSpacing: "0.02em",
										}}>
										{fest.name}
									</h3>
									<div
										style={{
											display: "flex",
											flexDirection: "column",
											gap: "0.3rem",
											marginBottom: "1.25rem",
										}}>
										<div
											style={{
												fontSize: "0.8rem",
												color: "#64748b",
												display: "flex",
												alignItems: "center",
												gap: "0.4rem",
											}}>
											<FontAwesomeIcon
												icon={faCalendar}
												style={{
													width: "11px",
													color: "#7c3aed",
												}}
											/>
											{fest.date}
										</div>
										<div
											style={{
												fontSize: "0.8rem",
												color: "#64748b",
												display: "flex",
												alignItems: "center",
												gap: "0.4rem",
											}}>
											<FontAwesomeIcon
												icon={faLocationDot}
												style={{
													width: "11px",
													color: "#7c3aed",
												}}
											/>
											{fest.location}
										</div>
									</div>
									<button
										style={{
											width: "100%",
											background: "rgba(124,58,237,0.12)",
											color: "#a78bfa",
											border: "1px solid rgba(124,58,237,0.3)",
											borderRadius: "7px",
											padding: "0.625rem",
											fontSize: "0.78rem",
											fontWeight: 700,
											cursor: "pointer",
											letterSpacing: "0.08em",
											textTransform: "uppercase",
											fontFamily: "inherit",
											transition: "background 0.2s",
										}}
										onMouseEnter={(e) =>
											(e.currentTarget.style.background =
												"rgba(124,58,237,0.25)")
										}
										onMouseLeave={(e) =>
											(e.currentTarget.style.background =
												"rgba(124,58,237,0.12)")
										}>
										View Festival →
									</button>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* EXPERIENCE / WHY US */}
			<section
				id="features"
				style={{
					padding: "clamp(5rem, 10vw, 9rem) clamp(1rem, 6vw, 5rem)",
					maxWidth: "1280px",
					margin: "0 auto",
				}}>
				<div style={{textAlign: "center", marginBottom: "4rem"}}>
					<div
						style={{
							fontSize: "0.72rem",
							letterSpacing: "0.2em",
							textTransform: "uppercase",
							color: "#7c3aed",
							fontWeight: 700,
							marginBottom: "0.75rem",
						}}>
						Why Choose Us
					</div>
					<h2
						style={{
							fontFamily: BARLOW,
							fontWeight: 800,
							fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
							textTransform: "uppercase",
							lineHeight: 0.95,
							margin: 0,
						}}>
						The Full Experience
					</h2>
				</div>
				<div
					style={{
						display: "grid",
						gridTemplateColumns:
							"repeat(auto-fit, minmax(220px, 1fr))",
						gap: "1.5rem",
					}}>
					{EXPERIENCE_ITEMS.map((item) => (
						<div
							key={item.title}
							style={{
								background: "#0e0e28",
								border: "1px solid rgba(124,58,237,0.15)",
								borderRadius: "12px",
								padding: "2rem",
								transition:
									"border-color 0.25s, transform 0.25s",
								cursor: "default",
							}}
							onMouseEnter={(e) => {
								const el = e.currentTarget as HTMLDivElement;
								el.style.borderColor = "rgba(167,139,250,0.4)";
								el.style.transform = "translateY(-4px)";
							}}
							onMouseLeave={(e) => {
								const el = e.currentTarget as HTMLDivElement;
								el.style.borderColor = "rgba(124,58,237,0.15)";
								el.style.transform = "translateY(0)";
							}}>
							<div
								style={{
									width: "48px",
									height: "48px",
									borderRadius: "10px",
									background: "rgba(124,58,237,0.15)",
									border: "1px solid rgba(124,58,237,0.25)",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									marginBottom: "1.25rem",
									color: "#a78bfa",
									fontSize: "1.1rem",
								}}>
								<FontAwesomeIcon icon={item.icon} />
							</div>
							<h3
								style={{
									fontFamily: BARLOW,
									fontWeight: 700,
									fontSize: "1.25rem",
									textTransform: "uppercase",
									letterSpacing: "0.04em",
									margin: "0 0 0.75rem",
								}}>
								{item.title}
							</h3>
							<p
								style={{
									color: "#64748b",
									fontSize: "0.875rem",
									lineHeight: 1.75,
									margin: 0,
								}}>
								{item.desc}
							</p>
						</div>
					))}
				</div>
			</section>

			{/* PLATFORM FEATURES (TABBED) */}
			<section
				id="platform"
				style={{
					padding: "clamp(5rem, 10vw, 9rem) 0",
					background: "#08081c",
					position: "relative",
					overflow: "hidden",
				}}>
				<div
					style={{
						position: "absolute",
						inset: 0,
						backgroundImage:
							"url(https://images.unsplash.com/photo-1565035010268-a3816f98589a?w=1920&h=900&fit=crop&auto=format)",
						backgroundSize: "cover",
						backgroundPosition: "center",
						opacity: 0.05,
					}}
				/>
				<div
					style={{
						position: "relative",
						padding: "0 clamp(1rem, 6vw, 5rem)",
						maxWidth: "1280px",
						margin: "0 auto",
					}}>
					<div style={{textAlign: "center", marginBottom: "4rem"}}>
						<div
							style={{
								fontSize: "0.72rem",
								letterSpacing: "0.2em",
								textTransform: "uppercase",
								color: "#7c3aed",
								fontWeight: 700,
								marginBottom: "0.75rem",
							}}>
							Platform Tools
						</div>
						<h2
							style={{
								fontFamily: BARLOW,
								fontWeight: 800,
								fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
								textTransform: "uppercase",
								lineHeight: 0.95,
								margin: 0,
							}}>
							Everything You Need
						</h2>
					</div>

					<div
						style={{
							display: "grid",
							gridTemplateColumns: "clamp(160px, 24%, 240px) 1fr",
							gap: "clamp(1rem, 3vw, 2.5rem)",
							alignItems: "start",
						}}
						className="ynf-platform-grid">
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								gap: "0.4rem",
							}}>
							{PLATFORM_FEATURES.map((f) => (
								<button
									key={f.id}
									onClick={() => setActiveFeature(f.id)}
									style={{
										background:
											activeFeature === f.id
												? "rgba(124,58,237,0.18)"
												: "transparent",
										border: "1px solid transparent",
										borderLeft: `3px solid ${activeFeature === f.id ? "#7c3aed" : "transparent"}`,
										borderRadius: "8px",
										padding: "0.875rem 1rem",
										textAlign: "left",
										color:
											activeFeature === f.id
												? "#a78bfa"
												: "#64748b",
										fontFamily: "inherit",
										fontSize: "0.85rem",
										fontWeight: 600,
										cursor: "pointer",
										transition: "all 0.2s",
										display: "flex",
										alignItems: "center",
										gap: "0.75rem",
									}}
									onMouseEnter={(e) => {
										if (activeFeature !== f.id)
											e.currentTarget.style.color =
												"#94a3b8";
									}}
									onMouseLeave={(e) => {
										if (activeFeature !== f.id)
											e.currentTarget.style.color =
												"#64748b";
									}}>
									<FontAwesomeIcon
										icon={f.icon}
										style={{width: "14px", flexShrink: 0}}
									/>
									{f.label}
								</button>
							))}
						</div>

						<div
							style={{
								background: "#0e0e28",
								border: "1px solid rgba(124,58,237,0.2)",
								borderRadius: "14px",
								padding: "clamp(1.75rem, 4vw, 3rem)",
								minHeight: "280px",
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
							}}>
							<div
								style={{
									width: "60px",
									height: "60px",
									borderRadius: "12px",
									background: "rgba(124,58,237,0.2)",
									border: "1px solid rgba(124,58,237,0.35)",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									color: "#a78bfa",
									fontSize: "1.5rem",
									marginBottom: "1.5rem",
								}}>
								<FontAwesomeIcon icon={currentFeature.icon} />
							</div>
							<h3
								style={{
									fontFamily: BARLOW,
									fontWeight: 800,
									fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
									textTransform: "uppercase",
									margin: "0 0 1rem",
									color: "#a78bfa",
									lineHeight: 1,
								}}>
								{currentFeature.title}
							</h3>
							<p
								style={{
									color: "#94a3b8",
									lineHeight: 1.8,
									fontSize: "1.0625rem",
									maxWidth: "520px",
									margin: 0,
								}}>
								{currentFeature.desc}
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* DEMO */}
			<section
				id="demo"
				style={{
					padding: "clamp(5rem, 10vw, 9rem) clamp(1rem, 6vw, 5rem)",
					maxWidth: "1280px",
					margin: "0 auto",
				}}>
				<div style={{textAlign: "center", marginBottom: "3.5rem"}}>
					<div
						style={{
							fontSize: "0.72rem",
							letterSpacing: "0.2em",
							textTransform: "uppercase",
							color: "#7c3aed",
							fontWeight: 700,
							marginBottom: "0.75rem",
						}}>
						Live Demo
					</div>
					<h2
						style={{
							fontFamily: BARLOW,
							fontWeight: 800,
							fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
							textTransform: "uppercase",
							lineHeight: 0.95,
							marginBottom: "1.25rem",
						}}>
						Try the Platform
					</h2>
					<p
						style={{
							color: "#64748b",
							fontSize: "1.0625rem",
							maxWidth: "500px",
							margin: "0 auto",
							lineHeight: 1.65,
						}}>
						Jump straight into a fully working demo. Choose your
						role and explore every feature — no sign-up required.
					</p>
				</div>

				<div
					style={{
						display: "grid",
						gridTemplateColumns:
							"repeat(auto-fit, minmax(220px, 1fr))",
						gap: "1.25rem",
						marginBottom: "2rem",
					}}>
					{DEMO_ROLES.map((role) => {
						const isHovered = demoHover === role.role;
						return (
							<Link
								key={role.role}
								href={`/api/demo-login/${role.slug}`}
								onMouseEnter={() => setDemoHover(role.role)}
								onMouseLeave={() => setDemoHover(null)}
								style={{
									background: isHovered ? role.bg : "#0e0e28",
									border: `1px solid ${isHovered ? role.hoverBorder : role.border}`,
									borderRadius: "12px",
									padding: "2rem 1.5rem",
									textAlign: "center",
									cursor: "pointer",
									color: "#f8fafc",
									transition: "all 0.22s",
									transform: isHovered
										? "translateY(-5px)"
										: "translateY(0)",
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									gap: "0.875rem",
									textDecoration: "none",
								}}>
								<div
									style={{
										width: "56px",
										height: "56px",
										borderRadius: "12px",
										background: role.bg,
										border: `1px solid ${role.border}`,
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										fontSize: "1.4rem",
										color: role.iconColor,
										transition: "transform 0.22s",
										transform: isHovered
											? "scale(1.1)"
											: "scale(1)",
									}}>
									<FontAwesomeIcon icon={role.icon} />
								</div>
								<div
									style={{
										fontFamily: BARLOW,
										fontWeight: 800,
										fontSize: "1.35rem",
										textTransform: "uppercase",
										letterSpacing: "0.04em",
										color: isHovered
											? "#f8fafc"
											: "#e2e8f0",
									}}>
									{role.role}
								</div>
								<p
									style={{
										color: "#64748b",
										fontSize: "0.82rem",
										lineHeight: 1.65,
										margin: 0,
									}}>
									{role.desc}
								</p>
								<div
									style={{
										marginTop: "0.5rem",
										background: role.btnBg,
										color: "#fff",
										borderRadius: "7px",
										padding: "0.6rem 1.25rem",
										fontSize: "0.78rem",
										fontWeight: 700,
										letterSpacing: "0.08em",
										textTransform: "uppercase",
										width: "100%",
										transition: "opacity 0.2s",
										opacity: isHovered ? 1 : 0.85,
									}}>
									Enter as {role.role.split(" ")[0]}
								</div>
							</Link>
						);
					})}
				</div>

				<div
					style={{
						textAlign: "center",
						color: "#334155",
						fontSize: "0.78rem",
						letterSpacing: "0.04em",
					}}>
					Demo data is reset daily · No account required · All
					features enabled
				</div>
			</section>

			{/* FOOTER */}
			<footer
				style={{
					background: "#08081c",
					borderTop: "1px solid rgba(124,58,237,0.15)",
					padding:
						"clamp(2.5rem, 4vw, 3.5rem) clamp(1rem, 6vw, 5rem)",
				}}>
				<div style={{maxWidth: "1280px", margin: "0 auto"}}>
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							flexWrap: "wrap",
							gap: "1.5rem",
							marginBottom: "2rem",
						}}>
						<div
							style={{
								fontFamily: BARLOW,
								fontWeight: 800,
								fontSize: "1.25rem",
								letterSpacing: "0.06em",
								color: "#a78bfa",
								textTransform: "uppercase",
							}}>
							Your Next Festival
						</div>
						<div
							style={{
								display: "flex",
								gap: "1.75rem",
								flexWrap: "wrap",
							}}>
							{NAV_ITEMS.map((link) => (
								<button
									key={link}
									onClick={() => scrollTo(link.toLowerCase())}
									style={{
										background: "none",
										border: "none",
										color: "#475569",
										fontSize: "0.78rem",
										letterSpacing: "0.1em",
										textTransform: "uppercase",
										cursor: "pointer",
										fontFamily: "inherit",
										transition: "color 0.2s",
									}}
									onMouseEnter={(e) =>
										(e.currentTarget.style.color =
											"#a78bfa")
									}
									onMouseLeave={(e) =>
										(e.currentTarget.style.color =
											"#475569")
									}>
									{link}
								</button>
							))}
						</div>
					</div>
					<div
						style={{
							borderTop: "1px solid rgba(124,58,237,0.1)",
							paddingTop: "1.5rem",
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							flexWrap: "wrap",
							gap: "1rem",
						}}>
						<div style={{color: "#334155", fontSize: "0.78rem"}}>
							© 2025 Your Next Festival. All rights reserved.
						</div>
						<div style={{display: "flex", gap: "1.5rem"}}>
							{["Privacy Policy", "Terms", "Contact"].map(
								(link) => (
									<button
										key={link}
										style={{
											background: "none",
											border: "none",
											color: "#334155",
											fontSize: "0.78rem",
											cursor: "pointer",
											fontFamily: "inherit",
											transition: "color 0.2s",
										}}
										onMouseEnter={(e) =>
											(e.currentTarget.style.color =
												"#a78bfa")
										}
										onMouseLeave={(e) =>
											(e.currentTarget.style.color =
												"#334155")
										}>
										{link}
									</button>
								),
							)}
						</div>
					</div>
				</div>
			</footer>

			<style>{`
        @media (max-width: 768px) {
          .ynf-desktop-nav { display: none !important; }
          .ynf-mobile-nav { display: block !important; }
          .ynf-platform-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 769px) {
          .ynf-mobile-nav { display: none !important; }
          .ynf-desktop-nav { display: flex !important; }
        }
      `}</style>
		</div>
	);
}
