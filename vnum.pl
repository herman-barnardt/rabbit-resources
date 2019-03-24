#! /usr/bin/perl
use strict;

my @versions = `git tag`;
my $max = 0;
my $max_tag = '';
my $prod_max = 0;
my $prod_max_tag = '';
my $temp;
my $mode = 0;

#
# Naming
# ------
# staging - vx.y.z  = v1.2.3
# master - vx.y.zm = v1.2.3m

# Modes
# -----
# 0 : staging naming - inc v3 - Last tag was v1.1.1 return v1.1.2 (DEFAULT)
# 1 : staging naming - report - Last tag was v1.1.1 return v1.1.1
# 2 : master naming - inv v3 - Last tag was v1.1.1m return v1.1.2m
# 3 : master naming - report - Last tag was v1.1.1m return v1.1.1m

if ( defined $ARGV[0] )
{
    $mode = $ARGV[0];

    if ( $mode < 1 && $mode > 3 )
    {
        $mode = 0;
    }
}

foreach my $version ( @versions )
{
    if( $version =~ /(\d+)\.(\d+)\.(\d+)$/ )
    {
         $temp = $1 * 100000 + $2 * 1000 + $3;

         if ( $temp > $max )
         {
             $max = $temp;
             $max_tag = $version;
         }
    }

    if( $version =~ /(\d+)\.(\d+)\.(\d+)m/ )
    {
         $temp = $1 * 100000 + $2 * 1000 + $3;

         if ( $temp > $prod_max )
         {
             $prod_max = $temp;
             $prod_max_tag = $version;
         }
    }
}

if ( $mode < 2 )
{
    if( $max_tag =~ /(\d+)\.(\d+)\.(\d+)/ )
    {
        my $v1 = $1;
        my $v2 = $2;
        my $v3 = $3;

        if( $mode == 0 )
        {
            $v3++;
        }

        print "v$v1.$v2.$v3";
    }
    else
    {
        print "$max_tag";
    }
}
else
{
    if( $prod_max_tag =~ /(\d+)\.(\d+)\.(\d+)/ )
    {
        my $v1 = $1;
        my $v2 = $2;
        my $v3 = $3;

        if( $mode == 2 )
        {
            $v3++;
        }

        print "v$v1.$v2.$v3" . "m";
    }
    else
    {
        print "$max_tag";
    }
}
