import { topSmall } from '@/animations/Animations';
import ChildrenWrapper from '@/components/ChildrenWrapper';
import ProjectLayout from '@/components/ProjectLayout'
import React from 'react'

function ProjectText() {
    return (
      <ChildrenWrapper variants={topSmall}>
        <p><b>This bachelor thesis focuses on the environmental impact of the Internet and the need for sustainable web design practices.</b> The web requires significant computing power and electricity, which contributes to climate change. The aim of this bachelor thesis is to minimize the web&apos;s carbon footprint by examining the awareness, practices, challenges and barriers faced by both industry and academia.</p>

<p>The bachelor thesis presents research conducted for <i>Yavuz Inal</i> on behalf of the <i>Institute of Design at the Norwegian University of Science and Technology</i>. <b>It is divided into three studies: Awareness and Practices, Challenges and Barriers, and Guidelines.</b> The studies in this bachelor thesis investigate sustainable web design by examining developers&apos; awareness and practices, identifying current challenges and barriers to implementation, and suggesting practices that should be included in dedicated sustainable web design guidelines.</p>

<p>By studying these aspects, the bachelor thesis intends to provide practical guidelines for sustainable web design to help stakeholders prioritize sustainability in web solutions and collectively reduce the web&apos;s carbon footprint. <b>In addition, the research results have been published and will be presented at relevant conferences on <i>Human-Computer Interaction (HCI)</i>, and disseminated together with the guidelines on a website developed by the group.</b></p>
      </ChildrenWrapper>
    );
  }

export default function swdg() {
  return (
      <ProjectLayout image='/project_1.jpg' title='Sustainable Web Design Guidelines'>
          <ProjectText />
    </ProjectLayout>
  )
}
