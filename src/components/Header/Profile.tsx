import { Box, Flex, Text, Avatar } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData: boolean
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Gustavo Santos</Text>
          <Text color="gray.300" fontSize="small">
            gustavojuneo@outlook.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Gustavo Santos"
        src="https://github.com/gustavojuneo.png"
      />
    </Flex>
  )
}
