import React from "react"
import { Router } from "@reach/router"
import "./global-styles/variables.scss"
import "./global-styles/styles.scss"
import Header from "components/header"
import HomePage from "components/page-home"
import AboutPage from "components/page-about"
import CareersPage from "components/page-careers"
import TripIdeasPage from "components/page-trip-ideas"
import ListingsPage from "components/page-listings"
import Listing from "components/page-listing-detail"
import EventsPage from "components/page-events"
import PassesPage from "components/page-passes"
import SubmitListingPage from "components/page-submit-listing"
import HikesPage from "components/page-adventures-hikes"

import imgFooterLogo from "images/icons/footer-logo.svg"

export function App() {
	return <>
		<Header />
		<div id="main">
			<Router>
				<HomePage path="/" />
				<AboutPage path="/about" />
				<CareersPage path="/careers" />
				<ListingsPage path="/listings" />
				<Listing path="/listing/:id" />
				<SubmitListingPage path="/submit-listing" />
				<EventsPage path="/events" />
				<PassesPage path="/passes" />
				<HikesPage path="/adventures-hikes" />
				<TripIdeasPage path="/trip-ideas" />
			</Router>
		</div>
		<div id="footer">
			<div className="layout">
				<div id="footer-logo">
					<img src={imgFooterLogo} />
				</div>
			</div>
		</div>
	</>
}