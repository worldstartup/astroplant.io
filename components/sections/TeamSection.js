import PropTypes from "prop-types";
import React from "react";
import CoreTeamMember from "../CoreTeamMember";
import ContentLayout from "../layouts/ContentLayout";
import styles from "../modules/TeamSection.module.css";
import Section from "../Section";
import TeamMember from "../TeamMember";

export default function TeamSection({ coreTeamMembers, otherTeamMembers }) {
  return (
    <Section id="team" bgColor={"dark-light"}>
      <ContentLayout>
        <h2 className={styles.sectionSubTitle}>The Core Team</h2>
        <div className={`${styles.grid} ${styles.coreMembersGrid}`}>
          {coreTeamMembers.map((member) => (
            <CoreTeamMember key={member._id} teamMember={member} />
          ))}
        </div>

        <h2 className={styles.sectionSubTitle}>Our Advisors</h2>

        <div className={`${styles.grid} ${styles.otherMembersGrid}`}>
          {otherTeamMembers.map(
            (member) =>
              member.memberOf === "Advisors" && (
                <TeamMember key={member._id} teamMember={member} />
              )
          )}
        </div>

        <h2 className={styles.sectionSubTitle}>Former Members</h2>

        <div className={`${styles.grid} ${styles.otherMembersGrid}`}>
          {otherTeamMembers.map(
            (member) =>
              member.memberOf === "Former Team" && (
                <TeamMember key={member._id} teamMember={member} />
              )
          )}
        </div>
      </ContentLayout>
    </Section>
  );
}

TeamSection.propTypes = {
  coreTeamMembers: PropTypes.arrayOf(PropTypes.object).isRequired,
  otherTeamMembers: PropTypes.arrayOf(PropTypes.object).isRequired,
};
