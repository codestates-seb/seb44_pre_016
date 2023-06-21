package com.bluelight.member.repository;

import com.bluelight.member.entity.Member;
import com.bluelight.member.entity.Profile;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProfileRepository extends JpaRepository<Profile, Long> {
    Optional<Profile> findByMember(Member member);
}
