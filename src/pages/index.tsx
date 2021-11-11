import { useToast } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { Header, Footer, MenuTab, Info } from "../components";
import Loader from "../components/Loader";
import { ProfileContext } from "../context/profile.state";

function Profile() {
  const toast = useToast();
  const profileContext = useContext(ProfileContext);
  const { getProfile, loading, profile, error } = profileContext;

  useEffect(() => {
    (async () => {
      await getProfile();
      if (error)
        toast({
          title: "Error",
          description: { error },
          status: "error",
          duration: 9000,
          isClosable: true,
        });
    })();
    console.log({ profile, error, loading });
  }, [profile.avatarUrl]);

  return (
    <div>
      <Header />

      {loading ? (
        <Loader />
      ) : (
        <>
          <MenuTab profile={profile} />
          <Info profile={profile} />
        </>
      )}

      <Footer />
    </div>
  );
}

export default Profile;
