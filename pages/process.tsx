import Image from 'next/image'
import styled from 'styled-components'
import { breakpoints } from '@/Styles/GlobalStyle'
import Gap from '@/Atoms/Gap'
import { H1, H2, H3, P } from '@/Atoms/Typography'
import Footer from '@/Organisms/Footer'
import IndustryForm from '@/Organisms/IndustryForm'
import Line from '@/Atoms/Line'
import { NavBar } from '@/Molecules/NavBar'
import ProcessAccordion from '@/Organisms/ProcessAccordion'

const StyledProcess = styled.div`
  max-width: 100vw;
  margin: 3rem 10vw;
  display: flex;
  flex-direction: column;

  @media ${breakpoints.mobileSm} {
    gap: 1rem;
  }

  @media ${breakpoints.mobileLg} {
    gap: 1.25rem;
  }

  @media ${breakpoints.tablet} {
    gap: 1.5rem;
  }

  @media ${breakpoints.laptop} {
    gap: 1.75rem;
  }

  @media ${breakpoints.desktopSm} {
    gap: 2rem;
  }
`

export default function Process() {
  return (
    <StyledProcess>
      <NavBar />
      <H1 fontWeight={800}>Our working process</H1>
      <H3 fontWeight={800}>Bright process: A complete guide to close more deals</H3>
      <Image src='/images/ourProcess.svg' alt='our process' width={1200} height={800} />
      <ProcessAccordion label='Step 1' header='Discovery'>
        <H3 fontWeight={700}>
          {`"Give me six hours to chop down a tree, and I will spend the first four sharpening the ax."`}
        </H3>
        <H3 fontWeight={700}>{`― Abraham Lincoln`}</H3>
        <P>
          {`During the discovery process, our goal is better to understand your product's short-term and long-term
          objectives. To do this properly, we need to understand your product's user types, prioritize an initial set of
          user stories for the minimal viable product, and build a long-term roadmap for the future.`}
        </P>
        <H3 fontWeight={700}>{`User types:`}</H3>
        <P>
          {`To design a solution that appropriately meets the needs of your users, we need first to understand who they
          are. During discovery, we'll work with you to define user types and develop user personas. These personas will
          help us keep your users' needs top of mind as we move forward in the process.`}
        </P>
        <H3 fontWeight={700}>{`User prioritization:`}</H3>
        <P>
          {`Although your product may have multiple user types, we'll need to prioritize certain user types over others.
          For example: let's say you're building a web application to help first-time homebuyers. For most first-time
          homebuyers, financing is a large part of their decision-making. So, to help them throughout the mortgage
          process, we may integrate your application with a large mortgage broker's API.`}
        </P>
        <P>
          {`Now that you have two types of users (i.e., homebuyers and mortgage brokers), we'll need to decide whether we
          optimize for homebuyers or mortgage brokers. This decision may depend on your short-term monetization strategy
          or long-term roadmap, but it's better to figure this out as soon as possible. Of course, we can always
          reoptimize the application as your business changes, but optimizing towards your initial win-condition is
          vital.`}
        </P>
        <H3 fontWeight={700}>{`User stories:`}</H3>
        <P>
          {`After we have a strong understanding of your users and their prioritization, we'll start to develop a set of
          user stories. User stories are simple, concise descriptions of who, what, and why a user wants to be able to
          do with your product. For example, "A homebuyer may fill out a 'first-time homebuyer's form' to receive a
          'mortgage estimate,' so we can better qualify them for a mortgage."`}
        </P>
        <P>
          {`User stories feel long-winded but provide a critical context for the design and development. Therefore,
          prioritizing these stories is essential so that we can focus on delivering the most value to your users with
          the limited time and resources that are available.`}
        </P>
        <H3 fontWeight={700}>{`Roadmap:`}</H3>
        <P>
          {`After we have a prioritized list of user stories, we'll build a product roadmap. This roadmap helps us
          organize which features to make and when. The roadmap should also include any dependencies or risks that may
          impact the delivery of features.`}
        </P>
        <P>
          {`During discovery, we'll discuss your short-term and long-term strategy. For example, your immediate plan may
          involve focusing on onboarding mortgage brokers. However, as you continue to grow and add leverage, you'd like
          to shift towards optimizing for homebuyers. It's important to note these things early on to accommodate future
          user stories better.`}
        </P>
        <H3 fontWeight={700}>{`MVP vs. GTM:`}</H3>
        <P>
          {`At the end of discovery, we'll have a pretty good idea of what your product should do and how we can help you
          achieve your short-term and long-term goals. However, there's always more that we could do. Therefore,
          delivering value quickly with a minimal viable product (MVP) is essential.`}
        </P>
        <P>
          {`An MVP is the absolute minimum your product needs to succeed. It allows you to validate your assumptions
          quickly without overbuilding or incurring unnecessary costs. A great way to think about an MVP is in terms of
          risk reduction—the goal is to reduce as much risk as possible while still delivering value to your users.`}
        </P>
        <P>
          {`Remember that an MVP is not the same as a minimum feature set (MFS). An MFS is the bare minimum of features
          your product needs to function. However, an MVP also considers user experience, desirability, and feasibility.`}
        </P>
        <P>
          {`Once you have an MVP, you can start working on your go-to-market (GTM) strategy. For example, your GTM
          strategy might involve additional or improved MVP features. Alternatively, it might focus on building out your
          sales and marketing efforts. Either way, discovery will help you understand what's necessary to succeed.`}
        </P>
        <H3 fontWeight={700}>{`Timeframe:`}</H3>
        <P>
          {`The entire discovery process usually takes 1-2 weeks. However, the timeline may be shorter or longer depending
          on your product's and business's complexity.`}
        </P>
        <P>
          {`Discovery is an essential part of building any software product. It allows us to understand better your users,
          their needs, and how we can help you achieve your goals. In the end, it saves a lot of time and money. If you
          have any questions about discovery or want to learn more, feel free to contact us. We're always happy to chat!`}
        </P>
      </ProcessAccordion>
      <ProcessAccordion label='Step 2' header='Design'>
        <H3 fontWeight={700}>{`“Design is the last great competitive advantage.”`}</H3>
        <H3 fontWeight={700}>{`― Seth Godin`}</H3>
        <P>
          {`So, we've gone through the discovery process, and you've signed off on our proposal and contract. Thank you
          very much for choosing to work with us! We're excited to get started on your project.`}
        </P>
        <P>
          {`The next step is designing. In this step, we'll take all the information we've gathered in discovery and start
          putting it into a visual form. Finally, we'll create wireframes and high-fidelity designs to show you how your
          website or application will look and function.`}
        </P>
        <P>
          {`In this stage, we'll refine our ideas and ensure that everything is feasible from a technical standpoint. We
          want to ensure that we can deliver on our promises, so we'll be doing much research and testing at this stage.`}
        </P>
        <H3 fontWeight={700}>{`Technical specifications:`}</H3>
        <P>
          {`We created a set of user stories during discovery, and now it's time to translate them into technical
          specifications. To continue our example from discovery, we need to define what type of form and fields the
          homebuyer needs to fill out to get a qualification letter. This level of specificity ensures we get the design
          right.`}
        </P>
        <H3 fontWeight={700}>{`Contradictions:`}</H3>
        <P>
          {`It's common for new product requirements to surface and contradict discovery. It could be something as minor
          as a change in field order on a form or something more major like a complete redesign of the home buying
          process.`}
        </P>
        <P>
          {`When contradictions arise, we'll work with you to determine the best course of action. Sometimes, the original
          decision was correct, and other times, the new requirement is valid, and we need to make a change. Either way,
          we'll always be transparent about what's happening and why.`}
        </P>
        <H3 fontWeight={700}>{`User flow diagrams:`}</H3>
        <P>
          {`We'll start creating user flow diagrams with the technical specifications in hand. These diagrams map a user's
          steps to complete a task on your website or application.`}
        </P>
        <P>
          {`For our homebuyer example, we'll create a user flow diagram that shows the steps someone would take to get a
          qualification letter. The user flow diagrams help us design each page and ensure the overall experience is
          smooth and easy to use.`}
        </P>
        <H3 fontWeight={700}>{`Sitemap:`}</H3>
        <P>
          {`The next step is to create a site or screen map. This map shows all the pages or screens that make up your
          website or application and how they're interconnected.`}
        </P>
        <P>
          {`The sitemap helps us understand the project's overall structure and identify gaps in the user experience. For
          example, if a user can't get from the home page to the qualification form, we'll need to add a link or
          redesign the home page.`}
        </P>
        <H3 fontWeight={700}>{`Wireframes:`}</H3>
        <P>
          {`With the user flow diagrams and site map in hand, we'll start creating wireframes. Wireframes are low-fidelity
          prototypes that show the content and layout of each page but don't include colors, images, or branding.`}
        </P>
        <P>
          {`They help us focus on the functionality and content of each page without getting distracted by design details.
          For our homebuyer example, we'll create wireframes for the home page, qualification form, and results page.`}
        </P>
        <H3 fontWeight={700}>{`Typography & colors:`}</H3>
        <P>
          {`Once we approve the wireframes, we'll start working on the typography and colors. The goal is to create a
          consistent look and feel across all the pages. We'll choose fonts and colors that complement your brand and
          help users navigate your website or application.`}
        </P>
        <H3 fontWeight={700}>{`High-fidelity designs:`}</H3>
        <P>
          {`With the typography and colors in place, we'll create high-fidelity designs for each page. Finally, we'll use
          these final designs to build your website or application.`}
        </P>
        <P>
          {`We'll also create any necessary components, icons, illustrations, and graphics at this stage. for our
          homebuyer example, we'll design the home page, qualification form, results page, and other necessary screens.`}
        </P>
        <H3 fontWeight={700}>{`Timeframe:`}</H3>
        <P>
          {`Design usually takes two to eight weeks, depending on the complexity of the product. At the end of the design
          process, you should understand how the product works and how to use it. I'll also have all the technical
          specifications and designs for our design team.`}
        </P>
        <P>
          {`If you have questions about design or anything else, please don't hesitate to reach out. We're here to help!`}
        </P>
      </ProcessAccordion>
      <ProcessAccordion label='Step 3' header='Development'>
        <H3
          fontWeight={700}
        >{`"Success consists of going from failure to failure without loss of enthusiasm."`}</H3>
        <H3 fontWeight={700}>{`― Winston Churchill`}</H3>
        <P>
          {`The foundation and keystone of building incredible products is agility. The ability to create something,
          collect feedback, and make necessary changes is paramount. Therefore, we complete everything within the bounds
          of our agile methodology.`}
        </P>
        <H2 fontWeight={700}>{`Our Agile Methodology`}</H2>
        <H3 fontWeight={700}>{`Traditional product management:`}</H3>
        <P>
          {`Before agile, traditional product management took a waterfall methodology. The client and development team
          would meet for weeks or months to discuss every feature. Afterward, they'd create a functional specification
          document with endless requirements and estimate everything to the minute. The result was a Gantt chart with
          nearly unlimited pages of tasks and a timeframe extending into years!`}
        </P>
        <P>
          {`If you've ever been a part of a project like this, you know the result. The end product is delivered late, the
          product is low-quality, and the client is confused. This result happens not because of a failure of skill or
          effort but a flawed process.`}
        </P>
        <H3 fontWeight={700}>{`Agile product management:`}</H3>
        <P>
          {`Agile is an iterative approach to product management focused on rapidly delivering complete and high-quality
          features, collecting feedback, and building a better product. To better understand the value of this process,
          I'd like to share with you a few essential principles.`}
        </P>
        <H3 fontWeight={700}>{`IKIWISI:`}</H3>
        <P>
          {`At the beginning of a product, neither the client nor the product team knows what they're building. At first,
          this may not seem sensible, but experience proves otherwise. The client's lack of certainty isn't because of
          their lack of knowledge or intelligence. They don't know because it's impossible. We'll only know something is
          complete when it's delivered and tested. Thus, IKIWISI or I Know It When I See It. So, how do we get to
          IKIWISI? For this, we need to follow an iterative approach.`}
        </P>
        <H3 fontWeight={700}>{`An iterative approach:`}</H3>
        <P>
          {`At the heart of agile lies the principle of incremental improvement. Instead of building a 100+ page
          Ganttchart with an endless list of milestones and specifications, we deliver fully functional features,
          collect feedback, and improve them further.`}
        </P>
        <H3 fontWeight={700}>{`The Cone of Uncertainty:`}</H3>
        <P>
          {`Combining the principles of IKIWISI and an Iterative Approach, we begin to narrow the cone of uncertainty.
          Imagine a graph with "Time" as its x-axis and "Uncertainty" as its y-axis. Over time, our goal is to improve
          the product iteratively, narrowing the cone of uncertainty. To do this, we need continuous delivery and
          feedback.`}
        </P>
        <H3 fontWeight={700}>{`Understanding why traditional product management fails:`}</H3>
        <P>
          {`Traditional Product Management fails because the stakeholders believe they initially fully understand the
          project's scope. This level of certainty provides fewer opportunities for minor deliveries and feedback, thus
          never narrowing the cone of uncertainty. As a result, the product is outdated and difficult to change.`}
        </P>
        <H3 fontWeight={700}>{`Agile events:`}</H3>
        <P>
          {`The primary events of agile product management are sprint planning, the daily standup, the sprint
          retrospective, and show & tell.`}
        </P>
        <H3 fontWeight={700}>{`Sprint planning:`}</H3>
        <P>
          {`A sprint is a two-week period where the team focuses on delivering a complete and high-quality feature. At the
          beginning of each sprint, we have a planning session to determine what to build. The goal is to provide the
          most impactful features in the shortest time.`}
        </P>
        <H3 fontWeight={700}>{`Daily standup:`}</H3>
        <P>
          {`Every day, we have a short meeting (no more than 15 minutes) to discuss our progress. Each team member shares
          what they accomplished yesterday, what they plan to work on today, and if there are any impediments in their
          way.`}
        </P>
        <H3 fontWeight={700}>{`Sprint retrospective:`}</H3>
        <P>
          {`At the end of each sprint, we reflect on what went well and what could be improved. This reflection is
          essential to our continuous improvement. It allows us to learn from the previous sprint and accelerate into
          the next sprint.`}
        </P>
        <H3 fontWeight={700}>{`Show & tell:`}</H3>
        <P>
          {`After each sprint, we have a Show & Tell session where we'll demo the completed features to you and other
          stakeholders. Again, this is an opportunity for everyone to provide feedback and help us prioritize future
          sprints.`}
        </P>
        <H3 fontWeight={700}>{`Timeline:`}</H3>
        <P>
          {`Development is a never-ending cycle. As your business grows and changes, you'll want improvements, new
          features, and a million other things. Our goal throughout the development cycle is to quickly produce testable
          features for your team to approve and then deploy them live to your customers.`}
        </P>
        <P>
          {`If you have any questions about our agile methodology or development process, please feel free to reach out.
          We're always here to help!`}
        </P>
      </ProcessAccordion>
      <ProcessAccordion label='Step 4' header='Deployment'>
        <H3 fontWeight={700}>{`"Be stubborn on vision but flexible on details."`}</H3>
        <H3 fontWeight={700}>{`― Jeff Bezos, Amazon`}</H3>
        <P>
          {`Deployment is putting your code into production, making it available to users. At Bright Development, we
          follow a simple, tried-and-true process for deployments that ensures a smooth transition every time.`}
        </P>
        <H3 fontWeight={700}>{`Beta testing:`}</H3>
        <P>
          {`After the code has been deployed to staging and thoroughly tested by our team, we'll open it up to beta
          testing. Beta testing allows a small group of users to try out the new features and functionality before it
          goes live. In addition, beta testing helps us catch any last-minute bugs and gives users a chance to provide
          feedback.`}
        </P>
        <H3 fontWeight={700}>{`Production:`}</H3>
        <P>
          {`Once beta testing is complete, we'll deploy the code to production. These features will be available to all
          users. We closely monitor production deployments and are always available to answer any questions or address
          any issues that may come up.`}
        </P>
        <P>
          {`Bright Development is committed to providing a smooth, seamless deployment process that results in
          high-quality code that meets your needs and expectations. Contact us today to learn more about our development
          process and how we can help you take your project to the next level.`}
        </P>
      </ProcessAccordion>
      <Gap height='2rem' />
      <IndustryForm />
      <Line />
      <Footer />
    </StyledProcess>
  )
}
