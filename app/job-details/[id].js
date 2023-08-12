import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { Stack, useRouter, useSearchParams } from "expo-router";
import { useState } from "react";

import {
  Company,
  JobAbout,
  JobFooter,
  JobTabs,
  ScreenHeaderBtn,
  Specifics,
} from "../../components";
import { COLORS, icons, SIZES } from "../../constants";

import useFetch from "../../hook/useFetch";

const tabs = ["About", "Skils", "Contact "];
const JobDetails = () => {
  const params = useSearchParams();
  const router = useRouter();
  const { data, isLoading, isError } = useFetch(`users/${params.id}`);

  const [refreshing, setRefreshing] = useState(false);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const onRefresh = () => {};
  const displayTabContent = () => {
    switch (activeTab) {
      case "Skils":
        return <Specifics title="Qualifications" />;
        break;
      case "Contact ":
        return (
          <JobAbout
            title={"Contact me"}
            content={`solaimannaderi00@gmail.com / 09147287477`}
            fitstName={data.first_name}
            lastName={data.last_name}
          />
        );
        break;
      case "About":
        return (
          <JobAbout
            title={"About me"}
            content={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos porro`}
            fitstName={data.first_name}
            lastName={data.last_name}
          />
        );

        break;

      default:
        break;
    }
  };

  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: COLORS.lightWhite },
            headerShadowVisible: false,
            headerBackVisible: false,
            headerTitle: "",
            headerLeft: () => (
              <ScreenHeaderBtn
                iconUrl={icons.left}
                dimension={"60%"}
                handlePress={() => router.back()}
              />
            ),
            headerRight: () => (
              <ScreenHeaderBtn
                iconUrl={icons.share}
                dimension={"60%"}
                handlePress={() => router.back()}
              />
            ),
          }}
        ></Stack.Screen>

        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {isLoading ? (
            <ActivityIndicator size={"large"} color={COLORS.primary} />
          ) : isError ? (
            <Text>Something went wrong</Text>
          ) : (
            <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
              <Company
                companyLogo={data.avatar}
                jobTitle={data.first_name}
                companyName={data.last_name}
              />
              <JobTabs
                tabs={tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />

              {displayTabContent()}
            </View>
          )}
        </ScrollView>

        <JobFooter/>
      </SafeAreaView>
    </>
  );
};

export default JobDetails;
