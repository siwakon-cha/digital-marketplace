import React from 'react'
import Link from 'next/link'
import { FacebookRounded, Twitter } from '@mui/icons-material'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import { IconButton } from '@mui/material'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Toolbar from '@mui/material/Toolbar'
import { HeaderEx } from 'styles/layout/header.styled'
import { ConnectWallet, Text } from 'styles/shared.style'

const Header = () => {
  return (
    <HeaderEx
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar disableGutters className="px-4">
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Stack direction="row" spacing={1} alignItems="center">
            <Link href="/">
              <a>
                <Text
                  className="font-semibold"
                  text={{
                    color: '#BB66F9',
                    size: '18'
                  }}>
                  Home
                </Text>
              </a>
            </Link>
            <Link href="/create-item">
              <a>
                <Text
                  className="font-semibold"
                  text={{
                    color: '#BB66F9',
                    size: '18'
                  }}>
                  Sell Digital Asset
                </Text>
              </a>
            </Link>
            <Link href="/my-assets">
              <a>
                <Text
                  className="font-semibold"
                  text={{
                    color: '#BB66F9',
                    size: '18'
                  }}>
                  My Digital Assets
                </Text>
              </a>
            </Link>
            <Link href="/creator-dashboard">
              <a>
                <Text
                  className="font-semibold"
                  text={{
                    color: '#BB66F9',
                    size: '18'
                  }}>
                  Creator Dashboard
                </Text>
              </a>
            </Link>
          </Stack>
        </Box>
        <Box sx={{ flexGrow: 0 }}>
          <Stack direction="row" spacing={1} alignItems="center">
            <IconButton
              color="primary"
              aria-label="link to discord"
              component="span">
              <img
                src="/assets/icons/discord-gray.svg"
                className="w-6 h-auto"
                alt=""
              />
            </IconButton>
            <IconButton
              color="primary"
              aria-label="link to twitter"
              component="span">
              <Twitter sx={{ color: '#959595' }} />
            </IconButton>
            <IconButton
              color="primary"
              aria-label="link to facebook"
              component="span">
              <FacebookRounded sx={{ color: '#959595' }} />
            </IconButton>
            <ConnectWallet
              size="small"
              variant="contained"
              startIcon={<AccountBalanceWalletIcon />}>
              Connect Wallet
            </ConnectWallet>
          </Stack>
        </Box>
      </Toolbar>
    </HeaderEx>
  )
}

export default Header
