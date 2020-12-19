import React from "react"

import Button from "../components/button"
import SectionHeader from "./section-header"

const CallToAction = () => (
  <div style={{ padding: "4rem 1rem", textAlign: "center" }}>
    <SectionHeader
      title="Sign up. Don't settle."
      description="Life's too short to be with someone who doesn't have similar intrests."
    />
    <Button>Get Early Access</Button>
  </div>
)

export default CallToAction
